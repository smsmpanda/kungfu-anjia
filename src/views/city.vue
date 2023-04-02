<template>
{{dataCity}}
</template>
<script>
import dataCities from '../data.json'
export default {
    computed:{
        cityType() {
            return this.$route.params.cityType
        },
        dataCity(){
            return dataCities.find(
                dataCity => dataCity.type === this.cityType
            )
        }
    }
}
</script>