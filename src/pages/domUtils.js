function openDialogUtils(dialogContainer){
    dialogContainer.showModal();
}
function closeDialogUtils(dialogContainer, formDialog){
    dialogContainer.close();
    if (formDialog) formDialog.reset()
}

function setFavicon(faviconUrl){
    const faviconContainer = document.querySelector('.favicon');
    faviconContainer.href = faviconUrl;
}

export {openDialogUtils, closeDialogUtils, setFavicon}
