import tone from 'tone'

var synth = new tone.Synth().toMaster()


  Template.app.helpers({
    test: () => {
        //console.log("irem")
    }
  })

  Template.app.events({
    'click .test': (evt, tpl) => {
          var note = 'C4'
           synth.triggerAttackRelease(note, '8n')
           console.log("note: " +note)
        }
  })