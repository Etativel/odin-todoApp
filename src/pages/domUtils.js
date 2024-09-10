function openDialogUtils(dialogContainer) {
  dialogContainer.showModal();
}
function closeDialogUtils(dialogContainer, formDialog) {
  dialogContainer.close();
  if (formDialog) formDialog.reset();
}
function setFavicon(faviconUrl) {
  const faviconContainer = document.querySelector(".favicon");
  faviconContainer.href = faviconUrl;
}
function setSidebarIcon(sidebarIconUrl) {
  const sidebarBtn = document.querySelector(".hide-sidebar-btn");
  const imgContainer = document.createElement("img");
  imgContainer.src = sidebarIconUrl;
  sidebarBtn.appendChild(imgContainer);
}
function setNotificationIcon(notificationIconUrl) {
  const sidebarBtn = document.querySelector(".notification-btn");
  const imgContainer = document.createElement("img");
  imgContainer.src = notificationIconUrl;
  sidebarBtn.appendChild(imgContainer);
}
export {
  openDialogUtils,
  closeDialogUtils,
  setFavicon,
  setSidebarIcon,
  setNotificationIcon,
};
