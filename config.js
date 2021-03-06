// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小可爱",  // 同上...
        "今天是你的生日",
        "也是我们在一起的",
        "第96天了！！！",
        "虽然相聚短暂",
        "和你在一起的时光是我最难忘的回忆",
        "还记得",
        "西安的第一场雪",
        "还记得",
        "我们第一次划船",
        "还记得",
        "陪你学习射箭",
        "还记得",
        "我们第一次打台球",
        "还记得",
        "我们一起走的路",
        "还记得",
        "宝贝专为我做的抖音视频",
        "还记得",
        "你为我过的第一个生日",
        "很遗憾，今年你的生日我不能陪你",
        "但仍希望你能永远快乐、健康、美丽！",
        "愿这岁月悠长",
        "我们即使不见亦能不散",
        "还记得一起吃的重庆火锅",
        "今年要吃好的喽哦",
        "要把我家可爱猪猪喂饱饱",
        "然后抱走",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/weixintu.png",
        "西安的第一场雪": "./imgs/shangxue.png",
        "我们第一次划船": "./imgs/huachuan.png",
        "陪你学习射箭": "./imgs/shejian.png",
        "我们第一次打台球": "./imgs/taiqiu.png",
        "我们一起走的路": "./imgs/lu.png",
        "宝贝专为我做的抖音视频": "./imgs/douyin.png",
        "你为我过的第一个生日": "./imgs/shengr.png",
        "还记得一起吃的重庆火锅": "./imgs/huoguo.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "好像缺点啥",
        balloons_flying: "好像还是少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
