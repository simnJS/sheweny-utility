import * as vscode from "vscode";
import * as fse from "fs-extra";

const path = require("path");
export function activate(context: vscode.ExtensionContext) {

/*
Create ts bot template
use this to create a new bot template
*/
	let createTsBotFile = vscode.commands.registerCommand('sheweny-utility.createtsbotfile', () => {

		try {
        const currentFolderPath =
        vscode.workspace.workspaceFolders![0].uri["fsPath"];
		


        const jsTemplateFolder = path.join(
            vscode.extensions.getExtension("simnJS.sheweny-utility")!.extensionPath,
            "src",
            "tsTemplate"
          );

          fse.copy(jsTemplateFolder, currentFolderPath, function (err: any) {
            if (err) {
              vscode.window.showErrorMessage("Failed to create the bot template!");
            }
            vscode.window.showInformationMessage("Created bot template!");
          });
		} catch (error) {
			vscode.window.showErrorMessage("Please open a workspace first");
		}
	});
/*
Create js bot template
use this to create a new bot template
*/

let createJsBotFile = vscode.commands.registerCommand('sheweny-utility.createjsbotfile', () => {

	try {
	const currentFolderPath =
	vscode.workspace.workspaceFolders![0].uri["fsPath"];
	


	const jsTemplateFolder = path.join(
		vscode.extensions.getExtension("simnJS.sheweny-utility")!.extensionPath,
		"src",
		"jsTemplate"
	  );

	  fse.copy(jsTemplateFolder, currentFolderPath, function (err: any) {
		if (err) {
		  vscode.window.showErrorMessage("Failed to create the bot template!");
		}
		vscode.window.showInformationMessage("Created bot template!");
	  });
	} catch (error) {
		vscode.window.showErrorMessage("Please open a workspace first");
	}
});


	context.subscriptions.push(createTsBotFile);
}

// this method is called when your extension is deactivated
export function deactivate() {}
