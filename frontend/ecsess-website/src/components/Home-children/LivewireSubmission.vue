<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Promote your event in our weekly newsletter!</h2>
        </div>
        <div id="submit-livewire" class="submit-livewire">
            <FormulateForm @submit="submitHandler()">
                <div class="submit-livewire-info-pane">
                    <div id="academic-contact-form-sender" class="form-wrapper">
                        <FormulateInput type="text" name="Full name" validation="required" class="form-input" label="What is your full name?" v-model="formData.senderName"/>
                        <FormulateInput type="text" name="Organization" validation="required" class="form-input" label="What is your organization's name?" v-model="formData.senderOrganization"/>                    
                        <FormulateInput type="email" name="Your email" id="email" validation="required|email" class="form-input" label="What is your McGill email?" v-model="formData.senderEmail"/>
                        <FormulateInput type="text" name="subject" id="subject" validation="required" class="form-input" label="Submission title" v-model="formData.subject"/>
                        <FormulateInput type="textarea" name="message" validation="required" class="form-input" label="Type your blurb here" v-model="formData.message"/>
                        <FormulateInput type="file" name="image" class="form-input" label="Add cover picture" v-model="formData.image"/>
                        <FormulateInput type="submit" name="Submit"/>
                        <h4>{{error}}</h4>
                    </div>

                </div>
            </FormulateForm>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LivewireSubmission",
    data() {
        return {            
            formData: {
                senderName: "",
                senderOrganization: "",
                senderEmail: "",
                subject: "",
                message: "",
                image: "",
            },
            error: ""
        }
    },
    methods: {
        submitHandler: function () {
            if (this.selectedRecipient === -1) {
                this.error = "You must select a recipient in step 1!";
            } else {
                axios.post("/api/user/resources/academic/email", this.formData);
                this.$forceUpdate();
            }
            
        }
    },
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

</style>