package it.rattly

import klite.Config
import klite.Server
import klite.XForwardedHttpExchange
import klite.XRequestIdGenerator
import kotlin.reflect.full.primaryConstructor

fun main() = Server(
    requestIdGenerator = XRequestIdGenerator(),
    httpExchangeCreator = XForwardedHttpExchange::class.primaryConstructor!!
).apply {
    Config.useEnvFile()
    ssr()
}.start()