import { PromptFileVariableKind, toPromptFileVariableEntry } from '../../common/chatVariableEntries.js';

export const enum ActionLocation {
	ChatWidget = 'chatWidget',
				return;
			}
			await editorService2.openEditor({ resource: sessionResource }, undefined);
			const attachedContext = [toPromptFileVariableEntry(uri, PromptFileVariableKind.PromptFile, undefined, false, [])];
			await chatService.sendRequest(sessionResource, `Implement this.`, {
				agentIdSilent: continuationTargetType,
				attachedContext