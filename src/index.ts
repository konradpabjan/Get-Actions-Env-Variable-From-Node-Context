import * as core from '@actions/core'

function run(){

    const envVariable = core.getInput('envVariable', { required: true });
    const envValue = process.env[envVariable]

    if(!envValue){
        core.setFailed(`Unable to get the value of the ${envVariable} env variable`)
    } else {
        core.setOutput(envVariable, envValue)
    }
}

run()

