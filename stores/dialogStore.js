import { defineStore } from "pinia";
export const useDialogStore = defineStore("dialogStore", {
	state: () => ({ contactDialog: false, showModal: false }),
	actions: {
		openContactDialog() {
			this.contactDialog = true;
		},
		closeContactDialog() {
			this.contactDialog = false;
		},
		toggleShowModal() {
			this.showModal = !this.showModal;
		},
	},
});
