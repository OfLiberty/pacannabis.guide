<template>
    <div>
        <div>
            <label>County</label>
            <select v-model="selectedCounty">
                <option>Any</option>
                <option v-for="county in countiesList" v-bind:value="county">{{ county }}</option>
            </select>
            <br />
            <label>Specialty</label>
            <select v-model="selectedSpecialty">
                <option>Any</option>
                <option v-for="specialty in specialtiesList" v-bind:value="specialty">{{ specialty }}</option>
            </select>
            <div v-if="anyAny">
                Please select an option to narrow your search.
            </div>
            <div class="wrapper">

                <div v-for="doc in listPractitioners"  style="clear:both;margin:15px 5px 10px">
                    <div style="">
                        <h3 style="margin-top:0px;margin-bottom:0px;">{{  practitioners[doc-1].Practitioner  }}</h3>
                        <p style="margin:0px;">{{ practitioners[doc-1].Location }}</p>
                    </div>
                    <div v-if="practitioners[doc-1].Specialty.length" style="">
                        <p style="margin-top:0px;margin-bottom:0px;"></p>
                        <p style="margin:0px;">
                            <strong>Specializations:</strong>
                            <span v-for="(sped, index) in practitioners[doc-1].Specialty">
                                <span v-if="index!=0">, </span>
                                {{ sped }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import practitioners from '../data/pa-mmj-practitioners.json'
export default {
    name: 'practitioners',
    data () {
        return {
            practitioners: practitioners,
            search: "",
            newSearch: "",
            selectedCounty: "",
            selectedSpecialty: ""
        }
    },
    computed:{
        listPractitioners() {
        
            if(this.countiesOption[this.selectedCounty] && this.specialtiesOption[this.selectedSpecialty]){
                var t;
                var b = this.countiesOption[this.selectedCounty];
                var a = this.specialtiesOption[this.selectedSpecialty];
                if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
                return a.filter(function (e) {
                    return b.indexOf(e) > -1;
                });
                // return this.countiesOption[this.selectedCounty].concat(this.specialtiesOption[this.selectedSpecialty]);
            }else if(this.specialtiesOption[this.selectedSpecialty]){
                return this.specialtiesOption[this.selectedSpecialty];
            }else{
                return this.countiesOption[this.selectedCounty];
            }
        },
        anyAny() {
            if(this.selectedCounty == 'Any' && this.selectedSpecialty == 'Any'){
                return true;
            }
            return false;
        },
        countiesOption() {
              
            const doctors = this.practitioners.reduce((acc, doc) => {

                (acc[doc.County] = acc[doc.County] || []).push(doc.ID);

                return acc;
            }, {});

            return doctors;
        
        },
        countiesList() {
            let list = [];
            Object.keys(this.countiesOption).forEach(function(key) {
                list.push(key);
            });
            // list = this.getArrayDiff(list, this.internatinalOptions);
            return list.sort();
        },
        specialtiesOption() {
            const apps = this.practitioners.reduce((acc, doc) => {
                if (Array.isArray(doc.Specialty)) {
                    doc.Specialty.forEach(spec => {
                        (acc[spec] = acc[spec] || []).push(doc.ID);
                    });
                }
                return acc;
            }, {});
            return apps;
        },
        specialtiesList() {
            let list = [];
            Object.keys(this.specialtiesOption).forEach(function(key) {
                // do something with obj[key]
                list.push(key);
            });
            return list.sort();
        },
    }
}
</script>