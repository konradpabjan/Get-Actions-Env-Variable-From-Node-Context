import * as core from '@actions/core'

function run(){

    const envVariable = core.getInput('EnvName', { required: true });
    const envValue = process.env[envVariable]

    if(!envValue){
        core.setFailed(`Unable to get the value of the ${envVariable} env variable`)
    } else {
        core.setOutput('EnvValue', envValue)
    }
}

run()

