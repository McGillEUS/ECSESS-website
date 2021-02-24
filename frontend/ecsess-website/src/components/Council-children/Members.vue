<template>
    <div id="members">
        <div id="subtitle" class="subtitle">
            <h2>Meet Your Council Members</h2>
        </div>
        <div id="council-members-list-wrapper" class="members-list-wrapper">
            <div id="execs" class="execs">
                <div id="sub-subtitle" class="sub-subtitle">
                    <h3 id="member-title-button" class="pink-highlight">Executives</h3>
                </div>
                <ul id="council-member-list" class="member-list">
                    <!--<img id="council-member-pic" class="council-member-pic" src="../../assets/temp.jpg"/>-->
                    <li id="council-member" class="member" v-for="execMember in execMembers" :key="execMember.name">
                        <div id="council-member-panel" class="member-panel">
                            <div :id="'image-desc-flip-' + execMember.id" class="image-description-flip-wrapper" @mouseover="showBlurb(execMember.id)" @mouseleave="hideBlurb(execMember.id)">
                                <img :id="'council-member-pic-' + execMember.id" class="member-pic" v-bind:src="require(`../../assets/members-temp/${execMember.photo}`)"/>
                                <p :id="'member-blurb-' + execMember.id" class="member-blurb" style="opacity:0.0">{{execMember.blurb}}</p>
                            </div>
                            <p id="member-name" class="member-name"><b>{{execMember.name}}</b></p>
                            <br>
                            <p id="member-role" class="member-role"><i>{{execMember.position}}</i></p>
                            <br>
                            <a :href="'mailto:' + execMember.email"><p id="member-email" class="member-email">Contact {{execMember.email}}</p></a>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="reps" class="reps">
                <div id="sub-subtitle" class="sub-subtitle">
                    <h3 id="member-title-button" class="pink-highlight">Representatives</h3>
                </div>
                <ul id="council-member-list" class="member-list">
                    <li id="council-member" class="member" v-for="repMember in repMembers" :key="repMember.name">
                        <div id="council-member-panel" class="member-panel">
                            <div :id="'image-desc-flip-' + repMember.id" class="image-description-flip-wrapper" @mouseover="showBlurb(repMember.id)" @mouseleave="hideBlurb(repMember.id)">
                                <img :id="'council-member-pic-' + repMember.id" class="member-pic" v-bind:src="require(`../../assets/members-temp/${repMember.photo}`)"/>
                                <p :id="'member-blurb-' + repMember.id" class="member-blurb" style="opacity:0.0">{{repMember.blurb}}</p>
                            </div>
                            <p id="member-name" class="member-name"><b>{{repMember.name}}</b></p>
                            <br>
                            <p id="member-role" class="member-role"><i>{{repMember.position}}</i></p>
                            <br>
                            <a :href="'mailto:' + repMember.email"><p id="member-email" class="member-email">Contact {{repMember.email}}</p></a>
                        </div>
                    </li>
                </ul>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: "Members",
    components: {},
    data: function () {
        return {
            execMembers: [
                {id: 0, name: "Dafne Culha", position: "President", photo: 'dafne.jpg', email: "ecsess.president@mcgilleus.ca", blurb: "Hi!"},
                {id: 1, name: "Kenz Zaghib", position: "VP Academic", photo: 'kenz.jpg', email: "ecsess.vpacademic@mcgilleus.ca", blurb: "Hi!"},
                {id: 2, name: "Ricky Liu", position: "VP Communications", photo: 'ricky.jpg', email: "ecsess.vpcomm@mcgilleus.ca", blurb: "Hi!"},
                {id: 3, name: "Melissa Hawley", position: "VP Administration", photo: 'melissa.jpg', email: "ecsess.vpadmin@mcgilleus.ca", blurb: "Hi!"},
                {id: 4, name: "Katie Younge", position: "VP External", photo: 'katie.jpg', email: "ecsess.vpexternal@mcgilleus.ca", blurb: "Hi!"},
                {id: 5, name: "Alena Midgen", position: "VP Internal", photo: 'alena.jpg', email: "ecsess.vpinternal@mcgilleus.ca", blurb: "Hi!"},
                {id: 6, name: "Ali Tahmasebi", position: "VP Finance", photo: 'ali.jpg', email: "ecsess.vpfinance@mcgilleus.ca", blurb: "Hi!"},
                {id: 7, name: "Alex Lam", position: "VP Tech Dev", photo: 'alex.jpg', email: "ecsess.vptech@mcgilleus.ca", blurb: "Hi!"}
                ], 

            repMembers: [
                {id: 8, name: "Hyun Su An", position: "U4 Software Rep", photo: 'hyun.jpg', email: "software.u4rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 9, name: "Marie Guertin", position: "U4 Computer Rep", photo: 'marie.jpg', email: "computer.u4rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 10, name: "Laurie Zaccarin", position: "U4 Electrical Rep", photo: 'laurie.jpg', email: "electrical.u4rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 11, name: "Nicolas Bieber", position: "U3 Software Rep", photo: 'nicolas.jpg', email: "software.u3rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 12, name: "Catherine Caron", position: "U3 Computer Rep", photo: 'catherine.jpg', email: "computer.u3rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 13, name: "Julie Bellia", position: "U3 Electrical Rep", photo: 'julie.jpg', email: "electrical.u3rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 14, name: "Adel Ahram", position: "U2 Software Rep", photo: 'adel.jpg', email: "software.u2rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 15, name: "Benjamin St-Laurent", position: "U2 Computer Rep", photo: 'ben.jpg', email: "computer.u2rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 16, name: "Matthew Zeitouni", position: "U2 Electrical Rep", photo: 'matt.jpg', email: "electrical.u2rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 17, name: "Charles Lapierre", position: "U1 Software Rep", photo: 'charles.jpg', email: "software.u1rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 18, name: "Arman Shroff-Mehrabadi", position: "U1 Computer Rep", photo: 'arman.jpg', email: "computer.u1rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 19, name: "Alondra Karam", position: "U1 Electrical Rep", photo: 'alondra.jpg', email: "electrical.u1rep@mcgilleus.ca", blurb: "Hi!"},
                {id: 20, name: "Ryan Reszetnik", position: "U0 Rep", photo: 'ryan.jpg', email: "ecsess.u0rep@mgcilleus.ca", blurb: "Hi!"}
                ]
                }
    },
    methods: {
        showBlurb: function (memberName) {
            document.getElementById("member-blurb-" + memberName).style.opacity = "1.0";
            document.getElementById("council-member-pic-" + memberName).style.filter = "brightness(50%)";
        },
        hideBlurb: function (memberName) {
            document.getElementById("member-blurb-" + memberName).style.opacity = "0.0";
            document.getElementById("council-member-pic-" + memberName).style.filter = "brightness(100%)";
        }
    },
    created () {
    }
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');


</style>