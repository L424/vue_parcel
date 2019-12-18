<template>
    <div class="feature">
        <div class="zan">
            <i class="fa fa-heart"
               :class="{red : zanData.isZan}"
               @click="dianZan(zanData.id)"></i>
            <span>{{zanData.count}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GiveLikeComponent',
        props: {
            zanData: {
                type: Object,
                default: () => ({})
            },
        },
        methods: {
            dianZan(id) {
                this.$emit('state', id)
            }
        }
    }
</script>

<style lang="scss">
    .feature {
        padding: 20px 10px;
        border: 1px solid #20a2f7;

        .zan {
            font-size: 50px;

            .red {
                color: #f00;
            }
        }
    }
</style>