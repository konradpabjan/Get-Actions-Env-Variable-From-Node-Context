import * as core from '@actions/core'
import * as exec from '@actions/exec'
const chalk = require('chalk')
const style = require('ansi-styles');
var colors = require('colors');

async function run(){

    //const envVariable = core.getInput('EnvName', { required: true });
    //const envValue = process.env[envVariable]

    console.log("this is going to be some normal output")
    core.info("this is output using core.info")
    console.log("some more normal output")
    core.startGroup("this is the start of a group")
    core.info("info output inside group")
    console.log("standard output in group")
    core.endGroup()

    core.error("This is what standard error looks like")
    core.warning("This is going to be standard warning output")

    console.log("some normal output again")

    console.log('curious about this' + chalk.blue("Blue with console log"))
    console.log('Some more output ' + chalk.bgCyan.green('Curious about this') + ' thinking about this...')
    console.log("normal output that should reset color")
    core.info(chalk.blue("Blue cyan with core info"))

    console.log('\u001b[35mThis is a test');
    //await exec.exec('bash', ['-c','curl -s https://gist.githubusercontent.com/HaleTom/89ffe32783f89f403bba96bd7bcd1263/raw/ | bash'])

    console.log('\u001b[36mThis is a test');

    console.log(colors.red('This should be red'))
    console.log(colors.bgCyan("This should be background cyan"))
    console.log(`${chalk.blue('this should be blue using chalk')}`)
    console.log(style.bgColor.ansi.hsl(120, 80, 72) + 'Hello world!' )
    console.log(style.color.ansi16m.hex('#abcdef') + 'Hello world!')
    /*
    if(!envValue){
        core.setFailed(`Unable to get the value of the ${envVariable} env variable`)
    } else {
        core.setOutput('EnvValue', envValue)
    }
    */
}

run()

