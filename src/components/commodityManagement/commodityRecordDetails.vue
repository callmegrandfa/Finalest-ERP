<template>
    <div class="customer-infor-wrapper">
        <el-col :span='24' class="border-left">
            <el-row class="h48 pt5">
                <button class="erp_bt bt_back" @click="back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                <button class="erp_bt bt_modify"><div class="btImg"><img src="../../../static/image/common/bt_modify.png"></div><span class="btDetail">修改</span></button>
                <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
                <button class="erp_bt bt_save_add"><div class="btImg"><img src="../../../static/image/common/bt_save_add.png"></div><span class="btDetail">保存并新增</span></button>
                <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_audit.png"></div><span class="btDetail">审核</span></button> 
                
                
            </el-row>
            <el-row style="background:#fff">
               <el-col :span="5">
                    <el-row class="pt20" >
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                                    <label><small>*</small>类目</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="bgcolor smallBgcolor" >
                                <el-select  v-model="value" >
                                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>

                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row style=" background: rgb(249,249,249);">
                <el-col :span="5" style="margin-top:20px">
                     <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                                    <label><small>*</small>商品编码</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor" >
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                                    <label><small>*</small>商品名称</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor" >
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>品牌</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                                    <label><small>*</small>单位</label>
                            </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="bgcolor smallBgcolor">
                                <el-select  v-model="value" >
                                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>

                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="5" style="">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>商品条码</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>助记码</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style=""> 
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>上市时间</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style=""> 
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                                    <label><small>*</small>单位</label>
                            </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="bgcolor smallBgcolor">
                                <el-select  v-model="value" >
                                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>

                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="5" style="margin-bottom:20px"> 
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>体质期</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-bottom:20px"> 
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>备注</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row style="    background: rgb(249,249,249); padding-bottom:20px">
                <el-col :span="2">&nbsp;</el-col>
                <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                    <template>
                        <el-checkbox v-model="checked">启用多单位</el-checkbox>
                    </template>                       
                </el-col>
                <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                    <template>
                        <el-checkbox v-model="checked">唯一代码管理</el-checkbox>
                    </template>   
                </el-col>
                <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                    <template>
                        <el-checkbox v-model="checked">批次管理</el-checkbox>
                    </template>
                </el-col>
                <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                    <template>
                        <el-checkbox v-model="checked">保质期管理</el-checkbox>
                    </template>   
                </el-col>
                <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                    <template>
                        <el-checkbox v-model="checked">是否套件</el-checkbox>
                    </template>   
                </el-col>
            </el-row>
            <el-row class="bm-pd10 mt10" style=" background: rgb(249,249,249);">
                <el-col :span="12">
                    <span class="shop-title">
                        商品价格
                    </span>
                </el-col>
                <el-col :span="12" >
                    <span class="shop-sq" @click="ifShow = !ifShow">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}" style="width:15px;height:15px;margin-left:10px;color:#888;"></i></span>
                </el-col>
            </el-row>
            <el-collapse-transition>
                    <div v-show="ifShow">
            <el-row style=" background: rgb(249,249,249);">
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>进货价</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>批发价</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>会员价</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" style="margin-top:20px">
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>零售价</label>
                           </div>
                        </el-col>
                        <el-col :span="13">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" >
                    <el-row style="margin-bottom:20px;">
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor">
                                    <label>折扣率</label>
                           </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="smallBgcolor">
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </el-collapse-transition>
            <el-row class="bm-pd10 mt10" style=" background: rgb(249,249,249);">
                <el-col :span="12">
                    <span class="shop-title">
                        商品规格
                    </span>
                </el-col>
                <el-col :span="12" >
                    <span class="shop-sq" @click="ifShow1 = !ifShow1">收起<i @click="ifShow1 = !ifShow1" :class="{rotate : !ifShow1}"  class="el-icon-arrow-down" style="width:15px;height:15px;margin-left:10px;color:#888;"></i></span>
                </el-col>
            </el-row>
            <el-collapse-transition> 
                <div v-show="ifShow1"> 
                    <el-row class="pl10 pt10 pr10 pb10" style=" background: rgb(249,249,249);">
                        <el-col :span="24">
                            <el-table :data="tableData" border style="width: 100%">
                                <el-table-column prop="sequenceNumber" label="序号" width="60">
                                </el-table-column>
                                <el-table-column prop="AttributeEncoding" label="规格编码" width="120">
                                </el-table-column>
                                <el-table-column prop="AttributeEncoding" label="规格" width="120">
                                </el-table-column>
                                <el-table-column prop="startUsing" label="规格组" width="120">
                                </el-table-column>
                                <el-table-column prop="startUsing1" label="规格名称">
                                </el-table-column>
                              </el-table>
                        </el-col>
                    </el-row>
                </div>
            </el-collapse-transition>
            <el-row class="bm-pd10 mt10" style=" background: rgb(249,249,249);">
                <span class="shop-sq" style="position:absolute;
                right:0;top:0;z-index:999" @click="ifShow2 = !ifShow2">收起<i @click="ifShow2 = !ifShow2" :class="{rotate : !ifShow2}" class="el-icon-arrow-down" style="width:15px;height:15px;margin-left:10px;color:#888;"></i></span>
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="SKU" name="first">
                        <el-collapse-transition> 
                            <div v-show="ifShow2"> 
                                <el-row class="pl10 pt10 pr10 pb10" style=" background: rgb(249,249,249);">
                                    <el-col :span="24">
                                        <el-table :data="tableData1" border style="width: 100%">
                                        <el-table-column prop="sequenceNumber" label="序号" width="60">
                                        </el-table-column>
                                        <el-table-column prop="AttributeEncoding" label="SKU" width="100">
                                        </el-table-column>
                                        <el-table-column prop="AttributeEncoding" label="SKU名称" width="100">
                                        </el-table-column>
                                        <el-table-column prop="startUsing" label="条码">
                                        </el-table-column>
                                        <el-table-column prop="startUsing1" label="颜色">
                                        </el-table-column>
                                        <el-table-column prop="startUsing2" label="尺码">
                                        </el-table-column>
                                        <el-table-column prop="startUsing3" label="单位">
                                        </el-table-column>
                                        <el-table-column prop="startUsing4" label="进货价">
                                        </el-table-column>
                                        <el-table-column prop="startUsing5" label="零售价">
                                        </el-table-column>
                                        <el-table-column prop="startUsing6" label="批发价">
                                        </el-table-column>
                                        <el-table-column prop="startUsing7" label="会员价">
                                        </el-table-column>
                                        <el-table-column prop="startUsing8" label="折扣率">
                                        </el-table-column>
                                        <el-table-column prop="startUsing9" label="允许使用">
                                        </el-table-column>
                                        <el-table-column prop="startUsing10" label="备注">
                                        </el-table-column>
                                      </el-table>    
                                    </el-col>
                                </el-row>
                            </div>
                        </el-collapse-transition>
                    </el-tab-pane>
                    <el-tab-pane label="商品属性" name="second">
                        <el-collapse-transition> 
                            <div v-show="ifShow2"> 
                                <el-row style=" background: rgb(249,249,249);">
                                    <el-col :span="5" style="margin-top:20px">
                                        <el-row>
                                            <el-col :span="8">
                                                <div class="bgcolor smallBgcolor">
                                                        <label>品类</label>
                                               </div>
                                            </el-col>
                                            <el-col :span="15">
                                                <div class="smallBgcolor">
                                                <el-input placeholder=""></el-input>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="6" style="margin-top:20px">
                                        <el-row>
                                            <el-col :span="8">
                                                <div class="bgcolor smallBgcolor">
                                                        <label>系列</label>
                                               </div>
                                            </el-col>
                                            <el-col :span="15">
                                                <div class="smallBgcolor">
                                                <el-input placeholder=""></el-input>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="6" style="margin-top:20px">
                                        <el-row>
                                            <el-col :span="8">
                                                <div class="bgcolor smallBgcolor">
                                                        <label>性别</label>
                                               </div>
                                            </el-col>
                                            <el-col :span="15">
                                                <div class="bgcolor smallBgcolor">
                                                    <el-select  v-model="value" >
                                                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                    </el-option>

                                                    </el-select>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="6" style="margin-top:20px">
                                        <el-row>
                                            <el-col :span="8">
                                                <div class="bgcolor smallBgcolor">
                                                        <label>季节</label>
                                               </div>
                                            </el-col>
                                            <el-col :span="15">
                                                <div class="bgcolor smallBgcolor">
                                                    <el-select  v-model="value" >
                                                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                    </el-option>

                                                    </el-select>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="5" >
                                        <el-row style="margin-bottom:20px;">
                                            <el-col :span="8">
                                                <div class="bgcolor smallBgcolor">
                                                        <label>年份</label>
                                               </div>
                                            </el-col>
                                            <el-col :span="15">
                                                <div class="smallBgcolor">
                                                <el-input placeholder=""></el-input>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="6" >
                                        <el-row style="margin-bottom:20px;">
                                            <el-col :span="8">
                                                <div class="bgcolor smallBgcolor">
                                                        <label>其他属性</label>
                                               </div>
                                            </el-col>
                                            <el-col :span="15">
                                            <el-col :span="13">
                                                <div class="smallBgcolor">
                                                <el-input placeholder=""></el-input>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-collapse-transition>
                    </el-tab-pane>
                    <el-tab-pane label="图片" name="third">
                        <el-collapse-transition> 
                            <div v-show="ifShow2">  
                                <!-- <span>图片一</span> -->
                                <el-row style="text-align:center">
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                          class="upload-demo"
                                          action="https://jsonplaceholder.typicode.com/posts/"
                                          :on-preview="handlePreview"
                                          :on-remove="handleRemove"
                                          :file-list="fileList2"
                                          list-type="picture">
                                          <el-button size="small" type="primary">点击上传</el-button>
                                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-col>
                                </el-row>
                                
                            </div>
                        </el-collapse-transition>
                    </el-tab-pane>
                    <el-tab-pane label="使用组织" name="fourth">
                        <el-collapse-transition> 
                            <div v-show="ifShow2"> 
                                <el-row class="pl10 pt10 pr10 pb10" style=" background: rgb(249,249,249);">
                                    <el-col :span="24">
                                        <el-table :data="tableData4" border style="width: 100%">
                                        <el-table-column prop="sequenceNumber" label="序号" width="60">
                                        </el-table-column>
                                        <el-table-column prop="AttributeEncoding" label="业务组织">
                                        </el-table-column>
                                        <el-table-column prop="startUsing" label="上市日期">
                                        </el-table-column>
                                        <el-table-column prop="startUsing1" label="备注">
                                        </el-table-column>
                                        <el-table-column prop="startUsing2" label="允许使用">
                                        </el-table-column>
                                      </el-table>    
                                    </el-col>
                                </el-row>
                            </div>
                        </el-collapse-transition>
                    </el-tab-pane>

                  </el-tabs>
                </template>
                <!-- <el-col :span="12">
                    <span class="shop-title">
                        商品属性
                    </span>
                </el-col>
                <el-col :span="12" >
                    <span class="shop-sq" @click="ifShow2 = !ifShow2">收起<i @click="ifShow2 = !ifShow2" :class="{rotate : !ifShow2}" class="el-icon-arrow-down" style="width:15px;height:15px;margin-left:10px;color:#888;"></i></span>
                </el-col> -->
            </el-row>
            <el-row class="bm-pd10 mt10" style=" background: rgb(249,249,249);">
                        <el-col :span="24" class="pb10">
                            <span class="shop-title" style="border:none">
                                审计信息
                            </span>
                        </el-col>
                    </el-row>
            <el-row style=" background: rgb(249,249,249);" class="pt20">
                        <el-col :span="5">
                            <el-row>
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor">
                                            <label>创建人</label>
                                   </div>
                                </el-col>
                                <el-col :span="15">
                                    <div class="smallBgcolor">
                                    <el-input placeholder=""></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row>
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor">
                                            <label>创建时间</label>
                                   </div>
                                </el-col>
                                <el-col :span="13">
                                    <div class="smallBgcolor">
                                    <el-input placeholder=""></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row>
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor">
                                            <label>修改人</label>
                                   </div>
                                </el-col>
                                <el-col :span="13">
                                    <div class="smallBgcolor">
                                    <el-input placeholder=""></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row>
                                <el-col :span="8">
                                    <div class="bgcolor smallBgcolor">
                                            <label>修改时间</label>
                                   </div>
                                </el-col>
                                <el-col :span="13">
                                    <div class="smallBgcolor">
                                    <el-input placeholder=""></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
        </el-col>        
    </div>
</template>

<script>
    export default{
        name:'customerInfor',
        data(){
            return {
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
                ,
                activeName: 'second',
                ifShow:true,
                ifShow1:true,
                ifShow2:true,
                checked:true,
                try:{
                "groupId": 2,
                "stockId": 1,
                "addressId": 8,
                "completeAddress": "str33ing",
                "transportMethodId": 1,
                "contactPerson": "stri55ng",
                "phone": "18200326666",
                "logisticsCompany": "str55ing",
                "isDefault": true,
                "remark": "st54ring"
                },

                options: [{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],

                value: '',
                tableData: [{
                      sequenceNumber: '1',
                      AttributeEncoding: '颜色',
                      attributeName: '选择规格',
                      startUsing: '/',
                      startUsing1: '红/白'
                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '尺码',
                      attributeName: '选择规格组',
                      startUsing: '同学尺码',
                      startUsing1: '17码/18码',
                    }],
                tableData1: [{
                      sequenceNumber: '1',
                      AttributeEncoding: '20171012',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '红',
                      startUsing2: 'X',
                      startUsing3: '件',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '20171013',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '红',
                      startUsing2: 'M',
                      startUsing3: '件',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    }, {
                      sequenceNumber: '3',
                      AttributeEncoding: '20171112',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '绿',
                      startUsing2: 'X',
                      startUsing3: '箱',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    },{
                      sequenceNumber: '4',
                      AttributeEncoding: '20171113',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '绿',
                      startUsing2: 'M',
                      startUsing3: '箱',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    },], 
                    tableData4: [{
                      sequenceNumber: '1',
                      AttributeEncoding: '20171012',
                      attributeName: '20171012',
                      startUsing: '20171012',
                      startUsing1: '20171012',
                      startUsing2: '',
                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '20171013',
                      attributeName: '20171013',
                      startUsing: '20171013',
                      startUsing1: '20171013',
                      startUsing2: '',
                    }, {
                      sequenceNumber: '3',
                      AttributeEncoding: '20171112',
                      attributeName: '20171112',
                      startUsing: '20171112',
                      startUsing1: '20171112',
                      startUsing2: '',
                    }, {
                      sequenceNumber: '4',
                      AttributeEncoding: '20171113',
                      attributeName: '20171113',
                      startUsing: '20171113',
                      startUsing1: '20171113',
                      startUsing2: '',
                    }],   
                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
            }
        },
        created:function(){
            
            
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            back(e){
                this.$store.state.url='/Record/commodityRecord/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },

            storageData(e){//点击新增跳转
                var flag=false;
                var slidbarData=this.$store.state.slidbarData;//储存页签数组
                let name = '客户资料-基本信息';
                if(slidbarData.length==0){//slidbarData为空
                    flag=true;
                }else{//slidbarData不为空
                    for(var i=0;i<slidbarData.length;i++){
                        if(slidbarData[i].name==name){//相同页签
                            flag=false;
                            break;
                        }else{
                        flag=true;
                        }
                    }
                }
                //var pushItem={'name':name,'url':menuUrl+'/'+idparam};
                var pushItem={'name':'客户资料-基本信息','url':'customerBasicInfor','params':'default'}
                this.$store.state.url='/customerBasicInfor/default';//储存当前url
                if(flag){
                    slidbarData.push(pushItem);
                }
        
                this.switch();
                
            },

        },
    }
</script>

<style scoped>

.store-data-wrapper{
    width: 100%;
    height: auto;
}
.smallBgcolor .el-select{
    width: 100% !important ;
    margin-left: 10px;
}
.bgcolor label{
    width: 100% !important ;
    margin-right: 0; 
}
.smallBgcolor .el-input--suffix{
    width: 100% !important ;
}
.smallBgcolor .el-input{
    width: 100% !important ;
    margin-left: 10px;
}

.bgcolor{
    overflow:  visible; 
}
.bt_save{
    background-color: rgb(0,204,255);
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.bt_save_add{
    background-color: rgb(22,155,213);
}
.shouqi{
    padding-right: 20px;
}
.erp_bt .btImg1{
    position: absolute;
    width: 14px;
    height: 14px;
    top: 10px;
    right: 7px;
}
.erp_bt .btImg1 img{
    max-width: 100%;
    max-height: 100%;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.right{
    float: right;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
    height: 28px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt5{
    margin-top: 5px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}

.ml10{
    margin-left: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 30px;
    line-height: 30px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.border1{
    border: 1px solid #cccccc;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.shop-title{
    float: left;
    height: 40px;
    line-height: 40px;
    margin: 0;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 3px solid rgb(51,204,204);
    color: #000;
    padding: 0 20px;
}
.shop-sq{
    float: right;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #000;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}
.search-btn{
    display: inline-block;
    width: 87px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    background: #4A6997;
    color: white;
    cursor: pointer;
}
.open{
    display: inline-block;
    width: 49px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #cccccc;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
}
.text-right{
    text-align: right;
}
</style>

<style>
.el-tabs__nav{
    margin-left: 20px;
}

.bm-pd10{
    border-bottom: 1px solid #e4e4e4;
}
.shop-sq i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg); 
 }
.bgcolor{
    width: 100%;
}
.content,.whiteBg,.customer-infor-wrapper{
    float: left;
}
.customer-infor-wrapper .el-input input{
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.customer-infor-wrapper .el-checkbox__inner{
    width: 16px;
    height: 16px;
    border-radius:50% !important; 
   background-color:  #f4f4f5;
}
.customer-infor-wrapper .el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 4px !important;
    position: absolute;
    top: -2px !important;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 6px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}
.contents[data-v-ff98478e]{
    float: left;
}
/* 重写el-table样式 */
.customer-infor-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.customer-infor-wrapper .el-table td{
    padding: 3px 0;
}
.customer-infor-wrapper .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
/* .customer-infor-wrapper .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    border-radius: 50%;
} */
/* .customer-infor-wrapper .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 130px;
} */
/* .customer-infor-wrapper .el-input--suffix .el-input__inner{
    padding-right: 0;
}  */
</style>