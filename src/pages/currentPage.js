class SetCurrentPage {
    constructor(){
        this.currentPage = ""
    }
    setCurrentPage(page){
        this.currentPage = page;
    }
    getCurrentPage(){
        return this.currentPage;
    }
}
export default new SetCurrentPage