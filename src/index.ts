import * as core from '@actions/core'
const chalk = require('chalk')

function run(){

    const envVariable = core.getInput('EnvName', { required: true });
    const envValue = process.env[envVariable]

    console.log("this is going to be some normal output")
    core.info("this is output using core.info")
    console.log("some more normal output")
    core.startGroup("this is the start of a group")
    core.info("info output inside group")
    console.log("standard output in group")
    core.endGroup()

    core.error("This is what standard error looks like")
    core.warning("This is going to be standard warning output")

    chalk.bgCyan

    console.log("some normal output again")

    console.log('curious about this' + chalk.blue("Blue with console log"))
    console.log('Some more output ' + chalk.bgCyan.green('Curious about this') + ' thinking about this...')
    console.log("normal output that should reset color")
    core.info(chalk.blue("Blue cyan with core info"))

    if(!envValue){
        core.setFailed(`Unable to get the value of the ${envVariable} env variable`)
    } else {
        core.setOutput('EnvValue', envValue)
    }
}

run()

