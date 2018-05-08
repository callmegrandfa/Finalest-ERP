<template>
  <div class="upload_img">
      <!-- 左上角三角形 -->
      <img  class="upload_triangle" src="../../../../static/image/goodsFiles/triangle.png">
      <!-- 主图文字 -->
      <span class="upload_tittle">{{tittle}}</span>
      <!-- 展示图片 -->
      <img class="upload_showImg" v-show="chooseImg" :src="file.src">
      <!-- 删除图片 -->
      <div class="upload_delImg_wrapper" @click="fileDel()">
        <img  class="upload_delImg" v-show="chooseImg" src="../../../../static/image/goodsFiles/del.png">
      </div>
      
      <div class="upload_body">
      <!-- 上传区域 -->
            <div class="upload_addZoo" v-show="!chooseImg" @click="fileClick">+</div>
            <!-- <img v-show="!chooseImg" src="../../../../static/image/goodsFiles/upoad.png"> -->
      </div>
      <!-- <div class="upload_bt" @click="fileClick">上传</div> -->
      <input @change="fileChange($event)" type="file" class="upload_file" style="display: none"/>
  </div>
</template>

<script>
  export default {
    name: 'upload_img',
    props:['files','tittle'],
    data() {
      return {
        imgList: [],
        size: 0,
        limit:1,
        file:{},
        chooseImg:false,
      }
    },
    created () {
      let _this=this;
      if(_this.files.src!=''){
        _this.file.src=_this.files.src;
        _this.chooseImg=true;
      }else{
        _this.chooseImg=false;
      }
      
    },
    watch: {
      file(value){
        if(JSON.stringify(value) == "{}"){
          this.chooseImg=false;
        }else{
          this.chooseImg=true;
        }
      }
    },
    methods: {

      fileClick(e) {
        $(e.target).parents('.upload_img').find('.upload_file').click()
      },
      fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
        
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type != '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            // this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
      },
      fileAdd(file) {
          let _this=this;
        // if (this.limit !== undefined) this.limit--;
        // if (this.limit !== undefined && this.limit < 0) return;
        // if(_this.file=={}){
        //     return false
        // }
        //总大小
        // this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
        //   file.src = 'wenjian.png';
        //   this.imgList.push({
        //     file
        //   });
          // alert('请上传图片')

        } else {
          let reader = new FileReader();
          let image = new Image();
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            image.onload=function(){
              let width = image.width;
              let height = image.height;
              file.width=width;
              file.height=height;
            //   _this.imgList.push({
            //     file
            //   });
            //  _this.chooseImg=true
              _this.file=file;
              _this.data=file;
              _this.$emit('fileChange',_this.file);
              // console.log(_this.file);
              // console.log(_this.data)
              
            };
            image.src= file.src;
          }
        }
      },
      fileDel() {
          this.file={};
          this.$emit('fileChange',this.file);
          // this.chooseImg=false
        // this.size = this.size - this.imgList[index].file.size;//总大小
        // this.imgList.splice(index, 1);
        // if (this.limit !== undefined) this.limit++;
      },
      bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        let k = 1000, // or 1024
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      },
      dragenter(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      dragover(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      drop(el) {
        el.stopPropagation();
        el.preventDefault();
        this.fileList(el.dataTransfer);
      }
    }
  }
</script>
<style scoped>
  .upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
  }

  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }

  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
.upload_body{
  position: relative;

  top:calc(50% - 40px);
  
  background-color: #fff;
}
  .upload_warp_img_div {
    cursor: pointer;
    z-index: 2;
  }

  .upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 14px 0 0 14px;
    overflow: hidden
  }

  .upload_warp_text {
    text-align: left;
    margin-bottom: 10px;
    padding-top: 10px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
  }

  .upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
  }

  .upload_warp_left img {
    /* margin-top: 32px; */
  
  }

  .upload_warp_left {
    position: absolute;
    width: 92px;
    height: 95px;
    z-index: 1;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .upload_warp {
    margin: 14px;
    height: 130px;
  }
.upload_tittle{
  position: absolute;
  top: 5px;
  left: 3px;
  color: #fff;
  font-size: 12px;
  z-index: 6;
}
  

  .upload_img {
    position: relative;
    border: 1px solid #f1f4f7;
    float: left;
    width: 141px;
    height: 141px;
    border-left: none;
    margin-bottom: 3px;
  }
 
  .upload_triangle{
    width: 50px;
    height: 50px;
    position: absolute;
    top:0;
    left: 0;
    z-index: 5;
  }
  .upload_delImg_wrapper{
    width: 18px;
    height: 18px;
    position: absolute;
    top:0;
    right: 0;
    z-index: 5;
    cursor: pointer;
    background-color: #fff;
  }
  .upload_delImg{
    width: 18px;
    height: 18px;
    position: relative;
  }
  .upload_bt{
    background-color: #e4e4e4;
    cursor: pointer;
    color: #6dcccc;
  }
  .upload_addZoo{
    cursor: pointer;
    width: 80px;
    height: 80px;
    background-color: #f2f2f2;
    color: #c2cad8;
    border-radius: 5px;
    margin: auto;
    text-align: center;
    font-size: 32px;
    line-height: 80px;
  }
  .upload_showImg{
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }
</style>
