package com.objectpartners.plummer.kotlin

import kotlin.js.*

external fun require(name: String): dynamic

@Suppress("unused")
fun ctor(d: dynamic, vararg args: dynamic): dynamic = js("""
var i = Object.create(d.prototype);
d.apply(i, args)
i
""")

val app = require("js/root.jsx")

fun reset() {
    js("this").text = "kotlin"
}

fun main(args: Array<String>) {
    println("Loading app")
}
