# Caesar cipher CLI tool

## Clone project

```
git clone https://github.com/GlebKasyak/caesar_cipher.git
```

## Installing NPM modules

```
npm install
```

## Application description

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift - `required option`
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode - `required option`

Options description:
```bash
$ node task1 --help
```

**Usage example:**

```bash
$ node task1 -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node task1 --action decode -s 7 --input input.txt --output output.txt
```

**Text inside input file:**
> input.txt
> `This is secret. Message about "_" symbol!`

**Text inside output file(after encode):**
> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

**Exit from application**
```bash
click: ctrl + c
```
