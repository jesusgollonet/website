---
title: 'TIL: Template paths in packer build'
date: '2024-06-11T09:24:36.492Z'
draft: false
---

In order to create an image with [ packer ](https://www.packer.io/), you need to define a template that
configures your image. Here' a simple example:

```hcl
source "amazon-ebs" "example" {
  access_key    = var.aws_access_key
  secret_key    = var.aws_secret_key
  region        = var.region
  source_ami    = "ami-0c55b159cbfafe1f0"  # Amazon Linux 2 AMI
  instance_type = "t2.micro"
  ssh_username  = "ec2-user"
  ami_name      = "packer-example {{timestamp}}"
}

build {
  sources = ["source.amazon-ebs.example"]

  provisioner "shell" {
    script = "provision.sh"
  }
}

```

This template references a file called `provision.sh`. This is useful to do
additional configuration on the image before it's created. For the sake of
example here's what a provision shell file could look like: 

```bash
#!/bin/bash
echo "Hello, World!" > /tmp/hello.txt
sudo yum update -y
sudo yum install -y httpd
sudo systemctl enable httpd
sudo systemctl start httpd
```

Let's say we have both files under the same directory:

```bash
.
├── provision.sh
└── template.pkr.hcl

```

In order to create an image you need to run the `build` command.  When running
it, you need to inform packer how to find the template. Assuming you're running
`packer build` in the directory you have your template, you can do that in 2
ways:

```bash
packer build template.pkr.hcl
```

or

```bash
packer build . 
```
where `.` is the current directory.

This is all well and simple, but things start getting a bit confusing when you
start nesting directories.

Let's say you have the following directory structure:

```bash
.
├── image
│   ├── provision.sh
│   └── template.pkr.hcl

```

if you now run the command from the parent directory:

```bash
% packer build image/template.pkr.hcl
Error: Failed preparing provisioner-block "shell" ""

  on image/template.pkr.hcl line 44:
    (source code not available)

    1 error(s) occurred:

    * Bad script 'provision.sh': stat provision.sh: no such file or directory
```

Packer can't find the provision script. This is because packer is looking for
the `provision.sh` file in the directory where you're running the command, not
where the template is.

You could be tempted to fix this by modifying the path to the provision script
so that it's relative to wherever you're running your command from, but that
makes your script less portable by imbuing it with your current structure.

My usual hacky way to fix this is to simply `cd` into the directory where the
packer image is before running the command. I do that between parentheses so
that once the script is ran my shell goes back to the original directory:

```bash
(cd image && packer build template.pkr.hcl)
```

While writing this I learned that you can also solve it by using [ HCL path
variables
](https://developer.hashicorp.com/packer/docs/templates/hcl_templates/path-variables).
Specifically, you can use the `path.root` variable to reference the directory
where the template is.

```hcl
provisioner "shell" {
    scripts = [
      "${path.root}/provision.sh"
    ]
}
```

Honestly, while this could seem more elegant, it seems less clear to me. Unless
you know what `path.root` is, it's not immediately clear what it's doing.

Even reading the documentation: 

> path.root: the directory of the input HCL file or the input folder.

it still takes me a few reads to understand what it is. 

So yep, I'm happy I found a more official way to solve this issue, but I will humbly 
stick to my hacky way, as I suspect it looks clearer to a bigger percentage of devs.
