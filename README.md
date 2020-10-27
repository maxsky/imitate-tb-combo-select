# 仿淘宝套餐选择

预览地址：[Product SKU select - codepen](https://codepen.io/maxsky/pen/oNLWgNp)

支持 SKU 禁用判断，后端返回数据格式参考：

```json
{
    "attrs": [{
        "id": 1,
        "name": "颜色",
        "options": [{
            "id": 1000,
            "name": "黑色",
            "selected": false
        }, {
            "id": 2000,
            "name": "蓝色",
            "selected": false
        }]
    }, {
        "id": 2,
        "name": "内存",
        "options": [{
            "id": 3000,
            "name": "128G",
            "selected": false
        }, {
            "id": 4000,
            "name": "256G",
            "selected": false
        }]
    }, {
        "id": 3,
        "name": "网络类型",
        "options": [{
            "id": 5000,
            "name": "移动",
            "selected": false
        }, {
            "id": 6000,
            "name": "联通",
            "selected": false
        }]
    }],
    "sku_list": [
        [1000, 3000, 5000],
        [1000, 4000, 5000],
        [1000, 4000, 6000],
        [2000, 3000, 5000],
        [2000, 4000, 5000],
        [2000, 4000, 6000]
    ]
}
```
