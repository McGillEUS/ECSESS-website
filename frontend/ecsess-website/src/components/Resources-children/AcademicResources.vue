<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Academic Resources</h2>
        </div>
        <div id="academic-resources" v-for="acadResource in acadResources" :key="acadResource.name">
            <EntityPanel :entity="acadResource"/>
        </div>
        <div id="subtitle" class="subtitle">
            <h2>Raise your Academic Concerns</h2>
        </div>
        <div id="contact-academic" class="contact-academic-people">
            <div>
                <h3 class="green-h3">Step 1: Select the person you'd like to talk to:</h3>
            </div>
            <div id="council-members-list-wrapper" class="members-list-wrapper">
                <ul id="council-member-list" class="member-list">
                    <li id="acad-member" class="member" v-for="acadMember in acadMembers" :key="acadMember.name">
                        <div id="acad-member-panel" class="member-panel">
                            <img id="acad-member-pic" class="member-pic" v-bind:src="require(`../../assets/${acadMember.photo}`)"/>
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
                        <FormulateInput type="text" name="First name" validation="required" class="form-input" label="What is your first name?"/>
                        <FormulateInput type="text" name="Last name" validation="required" class="form-input" label="What is your last name?"/>                    
                    <FormulateInput type="email" name="Your email" id="email" validation="required|email" class="form-input" label="What is your McGill email?"/>
                    <FormulateInput type="text" name="subject" id="subject" validation="required" class="form-input" label="Message subject"/>
                    <FormulateInput type="textarea" name="message" validation="required" class="form-input" label="Type your message here"/>
                    <FormulateInput type="file" name="atachments" class="form-input" label="Add any attachments"/>
                    <button id="send-message">Send Message</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import EntityPanel from "../General-children/EntityPanel"

export default {
    name: "AcademicResources",
    components: { EntityPanel },
    data() {
        return {
            acadMembers: [
                {id: 0, name: "Kenz Zaghib", position: "VP Academic of ECSESS", photo: 'temp.jpg'},
                {id: 1, name: "eee", position: "Academic Advisor", photo: 'temp.jpg'},
                {id: 2, name: "ooo", position: "VP Administration", photo: 'temp.jpg'}
                ], 
            acadResources: [
                {name: "Academic Forum", semester: "idk", photo: "temp.jpg", blurb: "no blurb found", secondPic: "none", id: 0},
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
</style>