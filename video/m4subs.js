// JavaScript Document

var subs = new Array();
subs[4] = new Array();
subs[4][1] = [
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
               //BEGIN INTERACTIVE
                {
              on: '01:13',
                 value: 'Interactive 1',
                    callback: function(obj) { updateSubtitles(obj); toInteractive('exer1'); }
                  
                }
             ];