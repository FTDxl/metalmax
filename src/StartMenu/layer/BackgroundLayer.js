/**
 * Created by 路漫漫在狂奔 on 16/7/30.
 */

var MMBackgroundLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        // 加载[背景]
        this.loadBg();
        return true;
    },
    loadBg : function(){
        var node = new cc.Sprite(res.start_bg_png);
        this.addChild(node);
        node.setPosition(GC.w2, GC.h2+100);
    }
});
