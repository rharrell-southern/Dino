// JavaScript Document

var subs = new Array();
subs[2] = new Array();
subs[2][1] = [
                {
              on: '00:01',
                 value: 'Keeping in mind that dinosaurs are divided into two categories by hip structure',
                    callback: updateSubtitles
                },
                {
              on: '00:08',
                 value: 'We are now going to look deeper into the Saurischian category. The Saurischian dinosaurs, which all have forward pointing pubis bones, are broken down into two groups based on the structure of their feet.',
                    callback: updateSubtitles
                },
                {
              on: '00:20',
                 value: 'The first group of Saurischians is Sauropods. The word Sauropod comes from "Sauro", which means lizard, and "pod" which means feet.',
                    callback: updateSubtitles
                },
                {
              on: '00:33',
                 value: 'The second sub group is the Theropods. The word Theropod comes from "thero", meaning beast, and "pod" meaning feet.',
                    callback: updateSubtitles
                },
                {
              on: '00:43',
                 value: 'For now we are going to focus on Sauropods. These dinosaurs were the largest land animals ever to walk the earth. The Sauropods were quadrupedal, which means they walked on four legs.',
                    callback: updateSubtitles
                },
                {
              on: '00:58',
                 value: 'Sauropods had long necks and small heads. Their long tails helped to counterbalance their long necks. The Sauropods had large midsections because they were vegetarians and needed to digest large amounts of vegetation.',
                    callback: updateSubtitles
                },
                {
              on: '01:16',
                 value: 'Some recognizable examples of Sauropods include the Plateosaurus and the Centiosaurus.',
                    callback: updateSubtitles
                },                  
               //BEGIN INTERACTIVE
                {
              on: '01:24',
                 value: 'Interactive 1',
                    callback: function(obj) { updateSubtitles(obj); toInteractive('exer1'); }
                  
                }
             ];