
<template>
    <el-dialog :visible.sync="dialogVisible" class="dialog_confirm_message" width="25%">
        <template slot="title">
            <span class="dialog_font">提示</span>
        </template>
        <el-col :span="24" style="position: relative;">
            <el-col :span="24">
                <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                <p class="dialog_font dialog_body_message">{{message}}</p>
            </el-col>
        </el-col>
        
        <span slot="footer">
            <button class="dialog_footer_bt dialog_font" @click="dialogConfirm">确 认</button>
            <button class="dialog_footer_bt dialog_font" @click="dialogCancel">取 消</button>
        </span>
    </el-dialog>
</template>
<script type="text/javascript">
	export default{
		props: ['message','dialogVisible'], 
		data(){
			return{
			}
		},
		created() {
	      
	    },
	    methods:{
	    	dialogConfirm(){
                this.$emit('confirm');
            },
            dialogCancel(){
                this.$emit('cancel');
            }
	    }
	}
</script>
<style scoped>

</style>