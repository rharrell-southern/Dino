var v1subs = [
                {
              on: '00:01',
                 value: 'Dinosaurs are divided into two categories based on their hip structure.',
                    callback: updateSubtitles
                },
                {
              on: '00:06',
                 value: 'As you can see these hips have very different bone structures. With some dinosaurs the pubis bone points forward like a lizard’s hip, and on others the pubis points backward like a bird’s hip.',
                    callback: updateSubtitles
                },
                {
              on: '00:19',
                 value: 'Each of these hip types share the same bones: the Ilim, Ischium, and Pubis. But keep in mind the direction the pubis points is what makes them stand apart.',
                    callback: updateSubtitles
                },
                {
              on: '00:30',
                 value: 'A dinosaur like this Plateosaurus has pubis that points forward which means he belongs to the “Saurichian” category. The word Saurichian means lizard hip. “Saur” means lizard and “ischi” means hip.',
                    callback: updateSubtitles
                },
                {
              on: '00:46',
                 value: 'On the other hand, a dinosaur like this Arrhinoceratops has a pubis that points backward, which means he belongs to the “Ornithischian” category. The word Ornithichian means bird hip. “Ornith” means bird and “ischi”, you guessed it, means hip.',
                    callback: updateSubtitles
                },
                {
              on: '01:03',
                 value: 'Take a moment to review the names of these bones and what category they belong to before moving on to the next section.',
                    callback: updateSubtitles
                },
				//SECTION 2
                {
              on: '01:14',
                 value: 'Let’s take a step back and look at these hips and dinosaurs in context.',
                    callback: updateSubtitles
                },
                {
              on: '01:21',
                 value: 'Here are three Saurischians. We have a Plateosaurus, Cetiosaurus, and the Oviraptor.',
                    callback: updateSubtitles
                },
                {
              on: '01:36',
                 value: 'On the Ornithischians side we have the Arrhinoceratops, Dryosaurus, and the Ankylosaurus.',
                    callback: updateSubtitles
                },    
                {
              on: '01:47',
                 value: 'Review these dinosaurs and be sure you know what hips belong to them.',
                    callback: updateSubtitles
                },
               //BEGIN INTERACTIVE
                {
              on: '01:13',
                 value: 'Interactive 1',
                    callback: function(obj) { updateSubtitles(obj); toInteractive('exer1'); }
                  
                },
                {
              on: '01:14',
                 value: 'Classification',
                    callback: function(obj) { $('#subnav a').removeClass('active'); $('#subnav a[start="74.5"]').addClass("active");}
                  
                },
                {
              on: '01:53',
                 value: 'Interactive 2',
                    callback: function(obj) { updateSubtitles(obj); toInteractive('exer3'); }
                  
                }
             ]