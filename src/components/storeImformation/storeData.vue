<template>
    <div class="store-data-wrapper">
        <el-row class="pt20 fs14">
            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">店铺类型</span>
                    </el-col>
                    <el-col :span="12">
                        <el-select v-model="value" placeholder="请选择店铺类型">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">所属组织</span>
                    </el-col>
                    <el-col :span="12">
                        <input class="input-need" type="text" placeholder="请录入所属组织"/>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">行政地区</span>
                    </el-col>
                    <el-col :span="12">
                        <el-select v-model="value" placeholder="请选择行政地区">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">业务地区</span>
                    </el-col>
                    <el-col :span="12">
                        <el-select v-model="value" placeholder="无">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='2' class="h30 ml10">
                <span class="btn">查询</span>
            </el-col>

            <el-col :span="1" class="h30" :offset="3" style='cursor:pointer'>
                <span>收起</span>
                <i class="el-icon-arrow-down"></i>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span='4' class="bg-white ml10 h30 pl10 mt10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">编码</span>
                    </el-col>
                    <el-col :span="12">
                        <input class="input-need" type="text" placeholder="PO-959894848"/>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10 mt10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">名称</span>
                    </el-col>
                    <el-col :span="12">
                        <input class="input-need" type="text" placeholder="请录入手工单号"/>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10 mt10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">客户性质</span>
                    </el-col>
                    <el-col :span="12">
                        <el-select v-model="value" placeholder="请选择客户性质">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    name:'storeData',
    data(){
        return {

        }
    },
}    
</script>

<style>
.store-data-wrapper{
    width: 100%;
    height: auto;
    background: rgba(238, 241, 245, 1);
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
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
.pt10{
    padding-top: 10px;
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
    height: 32px;
    line-height: 32px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
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
</style>
