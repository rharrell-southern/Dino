// JavaScript Document

var subs = new Array();
subs[3] = new Array();
subs[3][1] = [
                {
              on: '00:01',
                 value: 'Remember that dinosaurs are divided into two groups by their hip structure.',
                    callback: updateSubtitles
                },
                {
              on: '00:05',
                 value: 'Saurichians had hips like lizards, and Ornithichians had hips like birds. Saurichians are divided into two categories by what kind of foot they had.',
                    callback: updateSubtitles
                },
                {
              on: '00:17',
                 value: 'In the previous section we talked about Sauropods, the first group of Saurichians, which had feet like lizards. Next we will look at Theropods.',
                    callback: updateSubtitles
                },
                {
              on: '00:28',
                 value: 'The word Theropod means "beast footed". Theropods had four limbs, however they only walked on two, which means they were bipedal.',
                    callback: updateSubtitles
                },
                {
              on: '00:40',
                 value: 'Theropods were carnivores, which means they ate meat. These dinosaurs used their strong back legs, sharp teeth, and powerful jaws to chase and catch their prey.',
                    callback: updateSubtitles
                },
                {
              on: '00:52',
                 value: 'Some well known examples of Theropods include the Herrerasaurus, Oviraptor, and Tyrannosaurus Rex.',
                    callback: updateSubtitles
                },                
               //BEGIN INTERACTIVE
                {
              on: '01:01',
                 value: 'Interactive 1',
                    callback: function(obj) { updateSubtitles(obj); toInteractive('exer1'); }
                  
                }
             ];