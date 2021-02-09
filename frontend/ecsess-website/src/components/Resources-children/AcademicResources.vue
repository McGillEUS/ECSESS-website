<template>
    <div>
        <div id="subtitle" class="subtitle">
            <h2>Academic Resources</h2>
        </div>
        <div id="academic-resources" class="academic-resources-sub">
            <div id="featured-acad-resources" class="entity-screen">
                <div id="featured-acad-cover-photo" class="entity-screen-cover-photo">
                    <div class="img-container">
                        <img src="../../assets/semiconductors.jpg" alt="featured-academic" class="large-img">
                    </div>
                    <h3 id="acad-resource-text" class="imgtext">Academic Forum</h3>
                </div>
                <div id="featured-acad-description" class="entity-screen-description">
                    <div>
                        <p>
                            Placeholder text
                        </p>
                        <br><br>
                        <button>
                            ye
                        </button>
                    </div>
                </div>
            </div>
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
                    <div class="form-row">
                        <FormulateInput type="text" name="First name" validation="required" class="form-input" label="What is your first name?"/>
                        <FormulateInput type="text" name="Last name" validation="required" class="form-input" label="What is your last name?"/>                    
                    </div>
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
export default {
    name: "AcademicResources",
    components: {},
    data() {
        return {
            acadMembers: [
                {id: 0, name: "Kenz Zaghib", position: "VP Academic of ECSESS", photo: 'temp.jpg'},
                {id: 1, name: "eee", position: "Academic Advisor", photo: 'temp.jpg'},
                {id: 2, name: "Melissa Hawley", position: "VP Administration", photo: 'temp.jpg'}
                ], 
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
</style>