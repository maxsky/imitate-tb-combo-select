var OptionList = function(className, callFunc) {
    this.currValue = "", // 当前值
        this.currIndex = "", // 当前选中的索引
        this.currListHtml = ""; // 当前行生成的 HTML
    this.className = className,
        this.callFunc = callFunc;
}

function displayProp(obj) {
    var names = "";
    for (var name in obj) {
        names += name + ": " + obj[name] + ", ";
    }
    alert(names);
}

OptionList.prototype = {
    createListHtmlForAjax: function(reqURL) {
        var self = this;
        $.ajax({
            type: "POST", // 请求方式
            dataType: "json", // 预期服务器返回的数据类型
            url: reqURL, // 要访问的后台地址
            success: function(result) { // 请求成功后的回调函数
                var databack = eval(result);
                self.createListHtml(databack);
            }
        });
    },

    createListHtml: function(data) {
        var self = this;
        for (var i = 0; i < data.length; i++) {
            var curr_option = new option_sel(data[i].text, data[i].value, data[i].callFunc, data[i].selected);
            this.currListHtml += curr_option.createLineHtml(curr_option);
        }
        this.currListHtml = "<ul>" + this.currListHtml + "</ul>";
        $("." + this.className).html(this.currListHtml);
        $("." + this.className + " a").click(function() {
            currValue = $(this).attr("data_value");
            selectedVal = $(".cb-selected a").attr("data_value");
            if (currValue === selectedVal) {
                $("." + self.className + " li").removeClass("cb-selected");
            } else {
                currIndex = "index_" + currValue;
                $("." + self.className + " li").removeClass("cb-selected");
                $("." + self.className + " ." + currIndex).addClass("cb-selected");
            }
            currText = $(this).attr("data_text");
            var result = {
                value: currValue,
                index: currIndex,
                text: currText
            }
            eval(self.callFunc + "(result)");
        });
    }
}

var option_sel = function(text, value, callFunc, selected) {
    this.text = text,
        this.value = value,
        this.callFunc = callFunc,
        this.selected = selected;
}

option_sel.prototype = {
    createLineHtml: function(option_sel) {
        var currLineHtml = "\<span\>" + option_sel.text + "\</span\>";
        currLineHtml = "\<a href='#' data_value='" + option_sel.value + "' data_text='" + option_sel.text + "' >" + currLineHtml + " \</a\>";
        if (option_sel.selected) {
            currLineHtml = "\<li class='" + "index_" + option_sel.value + " cb-selected'\>" + currLineHtml + " \<i\>已选中\</i\> \</li\>";
        } else {
            currLineHtml = "\<li class='index_" + option_sel.value + "' \>" + currLineHtml + " \<i\>已选中\</i\> \</li\>";
        }
        return currLineHtml;
    }
}