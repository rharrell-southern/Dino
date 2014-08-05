// JavaScript Document

var subs = new Array();
subs[4] = new Array();
subs[4][1] = [
                {
              on: '00:01',
                 value: 'Remember that dinosaurs are divided into two groups by their hip structure. Saurichians had hips like lizards, and Ornithichians had hips like birds.',
                    callback: updateSubtitles
                },
                {
              on: '00:10',
                 value: 'Unlike Saurichian dinosaurs, whose pubis bones point forward, Ornithichian dinosaurs have pubis bones that point backward.',
                    callback: updateSubtitles
                },
                {
              on: '00:18',
                 value: 'Ornithichians are divided into at least five different groups: Ornithopods,  Pachycephalosaurus, Ceratopsians, Stegosaurs, and Ankylosaurs.',
                    callback: updateSubtitles
                },
                {
              on: '00:33',
                 value: 'All of the Ornithichians were herbivores. Herbivore is another word for vegetarian. Of the five kinds of Ornithichians, four kinds were armored and one wasn\'t.',
                    callback: updateSubtitles
                },
                {
              on: '00:45',
                 value: 'Of the five, two were bipedal which means they walked on two feet, and three were quadripedal which means they walked on four feet.',
                    callback: updateSubtitles
                },
                {
              on: '00:53',
                 value: 'Ornithopod means birdfoot. "Ornith" means bird and "pod" means foot. Ornithopods did not have armor and were mostly bipedal.',
                    callback: updateSubtitles
                },  
                {
              on: '01:04',
                 value: 'Scientists think that some of them walked on two legs all the time. Others may have used four legs when they walked but when they ran, it was always on two legs.',
                    callback: updateSubtitles
                },            
                {
              on: '01:15',
                 value: 'Two examples of Ornithopods dinosaurs are the dryosaurus and hadrosaurus. Pachycephalosaurus were armored dinosaurs. Their armor was on their sculls, some of which were shaped like domes. Some had horns that pointed backwards.',
                    callback: updateSubtitles
                },
                {
              on: '01:34',
                 value: 'Pachycephalosaurus had short arms and were the only armored dinosaurs that were bipedal. They also had stout and strong tails.',
                    callback: updateSubtitles
                }, 
                {
              on: '01:44',
                 value: 'Most Ceratopsians were quadripedal with short tails. Some had large, parrot like beaks. The rear portion of their skulls were often large; frills and horns were their most notable characteristics. The most famous Ceratopsian dinosaur is Triceratops.',
                    callback: updateSubtitles
                },  
                {
              on: '02:04',
                 value: 'Stegosaurs were also armored quadripedal dinosaurs. They had two rows of upright plates and/or spines from their necks to the end of their tails.',
                    callback: updateSubtitles
                },
                {
              on: '02:13',
                 value: 'Their front limbs were shorter than their hind limbs, and they had relatively small heads with narrow snouts.',
                    callback: updateSubtitles
                },
                {
              on: '02:21',
                 value: 'Ankylosaurs were the most heavily armored dinosaurs of all. They were quadripedal with short legs and a wide ribcage. They had plates and spines in many places all over their bodies. Some even had a club made of bone at the end of their tails.',
                    callback: updateSubtitles
                },
               //BEGIN INTERACTIVE
                {
              on: '02:38',
                 value: 'Interactive 1',
                    callback: function(obj) { updateSubtitles(obj); toInteractive('exer1'); }
                  
                }
             ];