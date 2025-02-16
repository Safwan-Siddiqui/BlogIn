---
title: JavaScript Tutorial
slug: js-tutorial
description: "Learn the basics of JavaScript, one of the most popular programming languages used in web development."
content: |
    JavaScript is essential for building dynamic, interactive websites. This tutorial covers the fundamentals of JavaScript, from variables and data types to functions and control structures. Follow along to start coding in JavaScript!
---



1. [Introduction](#introduction)
2. [Setting Up the Environment](#setting-up-the-environment)
3. [Variables and Data Types](#variables-and-data-types)
    - [var, let, const](#var-let-const)
    - [Primitive Data Types](#primitive-data-types)
4. [Operators](#operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Comparison Operators](#comparison-operators)
5. [Control Structures](#control-structures)
    - [if/else](#ifelse)
    - [Switch](#switch)
6. [Functions](#functions)
7. [Loops](#loops)
8. [Conclusion](#conclusion)

## Introduction

JavaScript is a versatile programming language used to make web pages interactive. It runs on the client side in the browser and is widely used in front-end development.

## Setting Up the Environment

Before writing JavaScript, ensure you have a text editor like VSCode or Sublime Text and a modern web browser like Chrome or Firefox.

To run JavaScript in the browser, you can:
1. Open your browser’s Developer Tools (`F12` or `Ctrl + Shift + I`).
2. Navigate to the Console tab.
3. Type JavaScript code and press `Enter` to run it.

Alternatively, create an HTML file and embed JavaScript using the `<script>` tag.

## Variables and Data Types
var, let, const
In JavaScript, variables can be declared using var, let, and const.

var: Old way to declare variables.
let: Modern way, allows block-scoped variables.
const: Used for constants, variables that cannot be reassigned.

let name = 'John';
const age = 30;
var job = 'Developer';

## Primitive Data Types
JavaScript has several basic data types:

String: Text data, e.g., 'Hello'
Number: Numeric data, e.g., 42
Boolean: Logical data, true or false
Undefined: A variable that has not been assigned a value
Null: Represents "no value"
## Operators
 ## Arithmetic Operators
Perform mathematical operations on numbers.
let x = 10;
let y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2

## Functions
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

## Loops 
for (let i = 0; i < 5; i++) {
    console.log(i);  // Prints numbers 0 to 4
}



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>
    <h1>Hello, JavaScript!</h1>

    <script>
        console.log('Hello from JavaScript!');
    </script>
</body>
</html>
