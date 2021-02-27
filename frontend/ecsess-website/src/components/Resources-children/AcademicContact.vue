<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Raise your Academic Concerns</h2>
        </div>
        <div id="contact-academic" class="contact-academic-people">
            <FormulateForm @submit="submitHandler()">
            <div>
                <h3 class="green-h3">Step 1: Select the person you'd like to talk to:</h3>
            </div>
            <div id="council-members-list-wrapper" class="members-list-wrapper">
                <ul id="council-member-list" class="member-list">
                    <li id="acad-member" class="member" v-for="(acadMember, i) in acadMembers" :key="i">
                        <div :id="'acad-member-panel-' + i" class="member-panel" @click="selectRecipient(acadMember, i)">
                            <img id="acad-member-pic" class="member-pic" v-bind:src="require('../../assets/members-temp/'+acadMember.photo)"/>
                            <p id="member-name" class="member-name">{{acadMember.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="green-h3">Step 2: Write your message:</h3>
            </div>
            <div id="academic-contact-info-pane" class="academic-contact-info-pane">
                <div id="academic-contact-form-sender" class="form-wrapper">
                        <FormulateInput type="text" name="First name" validation="required" class="form-input" label="What is your first name?" v-model="formData.senderFirstName"/>
                        <FormulateInput type="text" name="Last name" validation="required" class="form-input" label="What is your last name?" v-model="formData.senderLastName"/>                    
                    <FormulateInput type="email" name="Your email" id="email" validation="required|email" class="form-input" label="What is your McGill email?" v-model="formData.senderEmail"/>
                    <FormulateInput type="text" name="subject" id="subject" validation="required" class="form-input" label="Message subject" v-model="formData.subject"/>
                    <FormulateInput type="textarea" name="message" validation="required" class="form-input" label="Type your message here" v-model="formData.message"/>
                    <FormulateInput type="file" name="atachments" class="form-input" label="Add any attachments" v-model="formData.attachments"/>
                    <FormulateInput type="submit" name="Send Message"/>
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
    name: "AcademicContact",
    data() {
        return {
            acadMembers: [
                {id: 0, name: "Kenz Zaghib", email: "ecsess.vpacademic@mcgilleus.ca", position: "VP Academic", photo: 'kenz.jpg'},
                {id: 1, name: "Ricky Liu", email: "ecsess.vpcomm@mcgilleus.ca", position: "VP Communications", photo: 'ricky.jpg'}
                ],
            formData: {
                recipientName: "",
                recipientEmail: "",
                senderFirstName: "",
                senderLastName: "",
                senderEmail: "",
                subject: "",
                message: "",
                attachments: "",
            },
            selectedRecipient: -1,
            error: ""
        }
    },
    methods: {
        selectRecipient: function (recipient, i) {
            if (this.selectedRecipient !== i && this.selectedRecipient !== -1) {
                document.getElementById('acad-member-panel-' + this.selectedRecipient).style.border = "none";
            }
            this.formData.recipientName = recipient.name;
            this.formData.recipientEmail = recipient.email;
            this.selectedRecipient = i;
            document.getElementById('acad-member-panel-' + i).style.border = "2px solid darkgreen";
        },
        submitHandler: function () {
            if (this.selectedRecipient === -1) {
                this.error = "You must select a recipient in step 1!";
            } else {
                axios.post("/api/user/resources/academic/email", this.formData);
                this.$forceUpdate();
            }
            
        }
    }
}
</script>

<style lang="scss">
</style>