<template>
    <div class="w1170 note">
        <div class="content">
            <h2 class="item">标题</h2>
            <div class="item">
                <el-input placeholder="请输入标题" v-model="formData.title"></el-input>
            </div>
            <h2 class="item">内容</h2>
            <div class="quill-wrap item">
                <quill-editor v-model="formData.content" @change="onEditorChange($event)" class="rich_text" ref="myQuillEditor" :options="editorOption">
                </quill-editor>
            </div>
            <div class="label item">
                <p><span class="label_title">标签：</span></p>
                <el-button type="primary" @click="publishnote">发布笔记</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor, Quill } from "vue-quill-editor";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
Quill.register("modules/ImageExtend", ImageExtend);
export default {
    components: { quillEditor },
    data() {
        return {
            formData: {
                contentText: "",
                title: "",
                content: "",
                category: ""
            },
            editorOption: {
                modules: {
                    ImageExtend: {
                        loading: true,
                        name: "img",
                        action: "http://www.qiniu.com",
                        response: res => {
                            return res.info;
                        }
                    },
                    toolbar: {
                        container: container,
                        handlers: {
                            image: function() {
                                QuillWatch.emit(this.quill.id);
                            }
                        }
                    }
                }
            }
        };
    },
    methods: {
        onEditorChange({ quill, html, text }) {
            // console.log('editor change!', quill, html, text)
            this.formData.contentText= text;
            this.formData.contentText=this.formData.contentText.substring(0,200)+'...';
        },
        publishnote() {
            this.$axios.post("/article").then(res => {});
        }
    }
};
</script>

<style scoped lang="scss">
.note {
    background-color: #fff;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.content {
    padding: 20px;
}
.quill-wrap {
    height: 350px;
    .rich_text {
        height: 280px;
    }
}
.label {
    .el-button {
        margin-top: 13px;
    }
    .label_title {
        color: #409eff;
        font-size: 20px;
        font-weight: 700;
    }
}
.item {
    margin-top: 13px;
}
</style>
