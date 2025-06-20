const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootgqon2/",
            name: "springbootgqon2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootgqon2/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Web的电子产品销售系统设计与实现"
        } 
    }
}
export default base
