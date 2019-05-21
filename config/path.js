///////////---dev---///////////
const userServicePath_dev = "http://localhost:8080/soup";
const servicePaths_dev = () => {
    return {
        userServicePath: userServicePath_dev, //后台服务地址
    }
};
///////////---dev-end---///////////


///////////---pro---///////////
const userServicePath_pro = "http://www.harryper.top:8532/soupp";
const servicePaths_pro = () => {
    return {
        userServicePath: userServicePath_pro,
    }
};
///////////---pro-end---///////////

var servicePaths;
if (process.env.NODE_ENV == 'production') {
    servicePaths = servicePaths_pro
}  else {
    servicePaths = servicePaths_dev
}


export default servicePaths;