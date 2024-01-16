import * as fs from 'fs';

type HttpUri = string & {__brand: 'http'}
type SshUri = string & {__brand: 'ssh'}
type FileUri = string & {__brand: 'file'}

function loadLocalFileContent(uri: FileUri): string{
    return fs.readFileSync(uri, {encoding: 'utf-8'})
}
function fetchRemoteFileContent(uri: HttpUri): string{
    /* impl fetch(uri) */
    return "TODO"
}

function main(){
    let uri;
    uri = "https://github.com/facebook/react.git"
    // uri = "ssh://git@github.com:facebook/react.git"
    // uri = "file:///Users/rajeshbatth/OSS/react"

    loadLocalFileContent(uri);
    fetchRemoteFileContent(uri);

    if(isFileUri(uri)){
        // uri is still a string here. We didn't change anything to type
        loadLocalFileContent(uri);
    }
    if(isHttpUri(uri)){
        fetchRemoteFileContent(uri);
    }


}

function isHttpUri(uri: string): uri is HttpUri {
    return uri.startsWith('http:') || uri.startsWith('https:')
}
function isSshUri(uri: string): uri is SshUri {
    return uri.startsWith('ssh:')
}
function isFileUri(uri: string): uri is FileUri {
    return uri.startsWith('file:')
}



