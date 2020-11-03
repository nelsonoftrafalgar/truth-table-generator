// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { generateTable, isComment, isTernary } from '.';

import { getLayout } from './layout';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "truth-table-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('truth-table-generator.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor
		if (!editor) {
			vscode.window.showInformationMessage('editor not found')
		}

		const selection = editor?.document.getText(editor.selection)!

		if (isComment(selection)) {
			vscode.window.showErrorMessage('comments are not supported')
			return
		}

		if (isTernary(selection)) {
			vscode.window.showErrorMessage('ternary operator is not supported')
			return
		}

		const panel = vscode.window.createWebviewPanel(
			'truthTableGenerator',
			selection,
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		panel.webview.html = getLayout(JSON.stringify(generateTable(selection)))
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
