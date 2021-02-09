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
                            <img id="council-member-pic" class="member-pic" v-bind:src="require(`../../assets/${execMember.photo}`)"/>
                            <p id="member-name" class="member-name">{{execMember.name}}</p>
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
                            <img id="council-member-pic" class="member-pic" v-bind:src="require(`../../assets/${repMember.photo}`)"/>
                            <p id="member-name" class="member-name">{{repMember.name}}</p>
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
                {id: 0, name: "Dafne Culha", position: "President", photo: 'temp.jpg'},
                {id: 1, name: "Kenz Zaghib", position: "VP Academic", photo: 'temp.jpg'},
                {id: 2, name: "Ricky Liu", position: "VP Communications", photo: 'temp.jpg'},
                {id: 3, name: "Melissa Hawley", position: "VP Administration", photo: 'temp.jpg'},
                {id: 4, name: "Katie Younge", position: "VP External", photo: 'temp.jpg'},
                {id: 5, name: "Alena Midgen", position: "VP Internal", photo: 'temp.jpg'},
                {id: 6, name: "Ali Tahmasebi", position: "VP Finance", photo: 'temp.jpg'},
                {id: 7, name: "Alex Lam", position: "VP Tech Dev", photo: 'temp.jpg'}
                ], 

            repMembers: []}
    },
    methods: {
    },
    created () {

        this.repMembers = [
                {id: 0, name: "Hyun Su An", position: "U4 Software Rep", photo: 'temp.jpg'},
                {id: 1, name: "Marie Guertin", position: "U4 Computer Rep", photo: 'temp.jpg'},
                {id: 2, name: "Laurie Zaccarin", position: "U4 Electrical Rep", photo: 'temp.jpg'},
                {id: 3, name: "Nicolas Bieber", position: "U3 Software Rep", photo: 'temp.jpg'},
                {id: 4, name: "Catherine Caron", position: "U3 Computer Rep", photo: 'temp.jpg'},
                {id: 5, name: "Julie Bellia", position: "U3 Electrical Rep", photo: 'temp.jpg'},
                {id: 6, name: "Adel Ahram", position: "U2 Software Rep", photo: 'temp.jpg'},
                {id: 7, name: "Benjamin St-Laurent", position: "U2 Computer Rep", photo: 'temp.jpg'},
                {id: 8, name: "Matthew Zeitouni", position: "U2 Electrical Rep", photo: 'temp.jpg'},
                {id: 9, name: "Charles Lapierre", position: "U1 Software Rep", photo: 'temp.jpg'},
                {id: 10, name: "Arman Shroff-Mehrabadi", position: "U1 Computer Rep", photo: 'temp.jpg'},
                {id: 11, name: "Alondra Karam", position: "U1 Electrical Rep", photo: 'temp.jpg'}, 
            ]
    }
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');


</style>