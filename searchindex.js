Search.setIndex({docnames:["index","modules/base","modules/data_processors","modules/data_utils","modules/prompts","modules/root","modules/template","modules/trainer","modules/utils","modules/verbalizer","notes/configuration","notes/examples","notes/faq","notes/installation","notes/template","notes/verbalizer"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules/base.rst","modules/data_processors.rst","modules/data_utils.rst","modules/prompts.rst","modules/root.rst","modules/template.rst","modules/trainer.rst","modules/utils.rst","modules/verbalizer.rst","notes/configuration.rst","notes/examples.rst","notes/faq.rst","notes/installation.rst","notes/template.rst","notes/verbalizer.rst"],objects:{"openprompt.data_utils.conditional_generation_dataset":{WebNLGProcessor:[2,0,1,""]},"openprompt.data_utils.conditional_generation_dataset.WebNLGProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.data_processor":{DataProcessor:[2,0,1,""]},"openprompt.data_utils.data_processor.DataProcessor":{get_dev_examples:[2,1,1,""],get_examples:[2,1,1,""],get_label_id:[2,1,1,""],get_labels:[2,1,1,""],get_num_labels:[2,1,1,""],get_test_examples:[2,1,1,""],get_train_examples:[2,1,1,""],get_unlabeled_examples:[2,1,1,""]},"openprompt.data_utils.data_sampler":{FewShotSampler:[3,0,1,""]},"openprompt.data_utils.data_sampler.FewShotSampler":{sample_per_label:[3,1,1,""],sample_total:[3,1,1,""]},"openprompt.data_utils.relation_classification_dataset":{ReTACREDProcessor:[2,0,1,""],SemEvalProcessor:[2,0,1,""],TACREDProcessor:[2,0,1,""],TACREVProcessor:[2,0,1,""]},"openprompt.data_utils.text_classification_dataset":{AgnewsProcessor:[2,0,1,""],DBpediaProcessor:[2,0,1,""],ImdbProcessor:[2,0,1,""]},"openprompt.data_utils.text_classification_dataset.AgnewsProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.text_classification_dataset.DBpediaProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.text_classification_dataset.ImdbProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.typing_dataset":{FewNERDProcessor:[2,0,1,""]},"openprompt.pipeline_base":{PromptDataLoader:[1,0,1,""],PromptForClassification:[1,0,1,""],PromptForGeneration:[1,0,1,""],PromptModel:[1,0,1,""]},"openprompt.pipeline_base.PromptDataLoader":{tokenize:[1,1,1,""],wrap:[1,1,1,""]},"openprompt.pipeline_base.PromptForClassification":{deparallelize:[1,1,1,""],device:[1,2,1,""],extract_at_mask:[1,1,1,""],forward:[1,1,1,""],load_state_dict:[1,1,1,""],parallelize:[1,1,1,""],state_dict:[1,1,1,""],tokenizer:[1,2,1,""]},"openprompt.pipeline_base.PromptForGeneration":{deparallelize:[1,1,1,""],forward:[1,1,1,""],generate:[1,1,1,""],load_state_dict:[1,1,1,""],parallelize:[1,1,1,""],post_processing:[1,1,1,""],prepare_inputs_for_generation:[1,1,1,""],shift_logits_and_labels:[1,1,1,""],state_dict:[1,1,1,""]},"openprompt.pipeline_base.PromptModel":{forward:[1,1,1,""],prepare_model_inputs:[1,1,1,""],train:[1,1,1,""]},"openprompt.prompt_base":{Template:[5,0,1,"id0"],Verbalizer:[5,0,1,""]},"openprompt.prompt_base.Template":{from_config:[5,1,1,"id15"],from_file:[5,1,1,"id14"],get_default_loss_ids:[5,1,1,"id2"],get_default_shortenable_ids:[5,1,1,"id3"],get_default_soft_token_ids:[5,1,1,"id4"],incorporate_text_example:[5,1,1,"id5"],on_text_set:[5,1,1,"id13"],parse_text:[5,1,1,"id6"],post_processing_outputs:[5,1,1,"id9"],process_batch:[5,1,1,"id8"],registered_inputflag_names:[5,4,1,"id1"],safe_on_text_set:[5,1,1,"id12"],save:[5,1,1,"id10"],text:[5,2,1,"id11"],training:[5,4,1,"id16"],wrap_one_example:[5,1,1,"id7"]},"openprompt.prompt_base.Verbalizer":{aggregate:[5,1,1,""],from_config:[5,1,1,""],from_file:[5,1,1,""],gather_outputs:[5,1,1,""],generate_parameters:[5,1,1,""],handle_multi_token:[5,1,1,""],label_words:[5,2,1,""],normalize:[5,1,1,""],on_label_words_set:[5,1,1,""],process_outputs:[5,1,1,""],project:[5,1,1,""],register_calibrate_logits:[5,1,1,""],safe_on_label_words_set:[5,1,1,""],training:[5,4,1,""],vocab:[5,2,1,""],vocab_size:[5,2,1,""]},"openprompt.prompts.automatic_verbalizer":{AutomaticVerbalizer:[9,0,1,""]},"openprompt.prompts.automatic_verbalizer.AutomaticVerbalizer":{from_file:[9,1,1,""],optimize_to_initialize:[9,1,1,""],project:[9,1,1,""],register_buffer:[9,1,1,""]},"openprompt.prompts.knowledgeable_verbalizer":{KnowledgeableVerbalizer:[9,0,1,""]},"openprompt.prompts.knowledgeable_verbalizer.KnowledgeableVerbalizer":{add_prefix:[9,1,1,""],aggregate:[9,1,1,""],from_file:[9,1,1,""],generate_parameters:[9,1,1,""],on_label_words_set:[9,1,1,""],project:[9,1,1,""],register_calibrate_logits:[9,1,1,""]},"openprompt.prompts.manual_template":{ManualTemplate:[6,0,1,""]},"openprompt.prompts.manual_template.ManualTemplate":{on_text_set:[6,1,1,""]},"openprompt.prompts.manual_verbalizer":{ManualVerbalizer:[9,0,1,""]},"openprompt.prompts.manual_verbalizer.ManualVerbalizer":{add_prefix:[9,1,1,""],aggregate:[9,1,1,""],calibrate:[9,1,1,""],generate_parameters:[9,1,1,""],normalize:[9,1,1,""],on_label_words_set:[9,1,1,""],process_logits:[9,1,1,""],project:[9,1,1,""]},"openprompt.prompts.one2one_verbalizer":{One2oneVerbalizer:[9,0,1,""]},"openprompt.prompts.one2one_verbalizer.One2oneVerbalizer":{add_prefix:[9,1,1,""],calibrate:[9,1,1,""],generate_parameters:[9,1,1,""],normalize:[9,1,1,""],on_label_words_set:[9,1,1,""],process_logits:[9,1,1,""],project:[9,1,1,""]},"openprompt.prompts.prefix_tuning_template":{PrefixTuningTemplate:[6,0,1,""]},"openprompt.prompts.prefix_tuning_template.PrefixTuningTemplate":{generate_parameters:[6,1,1,""],on_text_set:[6,1,1,""],process_batch:[6,1,1,""],wrap_one_example:[6,1,1,""]},"openprompt.prompts.ptr_prompts":{PTRTemplate:[6,0,1,""],PTRVerbalizer:[9,0,1,""]},"openprompt.prompts.ptr_prompts.PTRVerbalizer":{on_label_words_set:[9,1,1,""],process_logits:[9,1,1,""]},"openprompt.prompts.ptuning_prompts":{PtuningTemplate:[6,0,1,""]},"openprompt.prompts.ptuning_prompts.PtuningTemplate":{generate_parameters:[6,1,1,""],get_default_soft_token_ids:[6,1,1,""],on_text_set:[6,1,1,""],process_batch:[6,1,1,""]},"openprompt.trainer":{ClassificationRunner:[7,0,1,""],GenerationRunner:[7,0,1,""]},"openprompt.trainer.ClassificationRunner":{configure_loss_function:[7,1,1,""]},"openprompt.utils":{calibrate:[8,3,0,"-"]},"openprompt.utils.calibrate":{calibrate:[8,5,1,""]},openprompt:{prompt_base:[5,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","property","Python property"],"3":["py","module","Python module"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:property","3":"py:module","4":"py:attribute","5":"py:function"},terms:{"0":[1,2,5,6,9,10,11,15],"0001":10,"0005":10,"01":10,"01998":0,"05":9,"1":[1,5,6,9,10,13,14],"10":10,"100":[1,10],"1000":[9,10],"10000":14,"11259":9,"120000":2,"123":10,"128":10,"13418":2,"14":2,"1493":2,"15509":2,"17":2,"18":2,"18025":2,"19":2,"19584":2,"2":[1,2,5,6,9,10],"20":14,"2010":2,"2017":2,"2020":2,"2021":[0,2],"2105":9,"2111":0,"22631":2,"25000":2,"256":10,"2717":2,"3":[1,5,9,13],"30":2,"4":[2,9],"40":2,"41":2,"42":2,"456":10,"4928":2,"5":[6,9,10],"500":10,"512":[1,6],"560000":2,"58465":2,"6":9,"6507":2,"66":2,"68124":2,"7":9,"70000":2,"7600":2,"8":[2,13],"9":13,"abstract":[1,2,5,14],"case":[1,5,7,11],"class":[0,2,3,5,6,7,9,10,11,14,15],"default":[0,1,2,5,6,9],"do":[1,5,6,9,11,13],"final":[1,2,5,9,14],"float":[6,9],"function":[0,1,5,6,7,9,10],"import":[2,3,6,9,11,14],"int":[1,2,3,5,6,9,10],"long":1,"new":[1,2,5,6,9,14],"return":[1,2,3,5,6,8,9],"static":[1,5,9],"true":[1,6,9,10,14],"try":14,"while":[1,5,7],A:[1,2,5,6,7,8,9,11,14],And:[1,10,13,14],As:[9,14],By:[1,5],For:[7,9,10,11,15],If:[0,2,3,9,10,14],In:[0,1,5,9,10,14],It:[1,2,5,6,11,14],Not:2,One:[0,7],That:[9,11],The:[1,2,3,5,6,7,9,10,11,15],There:[10,11],To:[1,5,9],Will:1,With:[1,5,11],__init__:[1,5],_forward:1,_texa:2,abc:2,abilen:2,abilene_regional_airport:2,abl:[1,5,6],about:[10,11,12],abov:[2,6],accord:[1,5],accum:9,acheiv:[1,5],achiev:9,across:1,actor:2,actual:[1,5,11],adapt:0,add:[1,5,9,14],add_prefix:9,address:2,adopt:9,advanc:[1,5,11],affect:1,after:[1,2,9],ag:2,again:[1,5],agenc:2,aggreg:[1,5,9],agnew:2,aim:[1,5],airplan:2,airport:2,al:2,albert:[1,11],all:[1,2,5,9,10],allow:[1,5,6,9,15],along:[1,5,6],also:[0,2,7,11,14,15],also_sample_dev:[3,10],alt:2,alternate_nam:2,although:11,among:11,an:[0,1,2,3,5,6,8,9,14],anaconda:13,analysi:11,ani:[1,2,5,9],annot:2,anoth:[7,11],antenna:2,api:[1,5,7,11],append:[1,5],appli:[3,7,9,14],applic:[2,11],appoint:[1,5,6,9],ar:[1,2,5,6,9,10,11,13,15],arg:1,argmax:11,argument:[1,5],arrai:2,art:2,articl:0,artist:2,arxiv:[0,9],ask:12,assert:2,astronomyth:2,athlet:[2,15],attack:2,attent:2,attribut:[1,5,6,10,11,14],author:[0,2],automat:0,automatic_verb:10,automaticverb:9,autoregress:11,awar:2,award:2,bachifi:7,bad:[11,15],badli:11,balanc:[1,9,10],base:[0,2,5,6,9,11],base_path:2,basic:[0,1,5,6,9,11,14],basotho:2,batch:[1,5,6,9,10,11],batch_siz:[1,5,9,10],batchifi:1,batchnorm:1,batchsiz:9,battl:2,becaus:1,been:[1,11],befor:1,begin:[1,5,9],behavior:1,being:[1,5],bert:[1,11],bertconfig:11,bertmodel:11,berttoken:11,best:10,better:[2,9],between:2,bia:10,binari:14,biologyth:2,blank:2,block:6,bodiesofwat:2,book:9,bool:[1,3,5,6,9],branch:9,brand:6,broadcast:[1,5,6],broadcastprogram:2,build:[2,15],built:0,busi:[2,15],cacul:1,calcul:[1,5,8,9],calibr:[0,1,5,9],call:[1,2],callabl:7,can:[1,2,5,6,7,9,10,11,13,14,15],candid:9,candidate_frac:9,car:2,categori:15,cater:2,caus:2,cause_of_death:2,cd:13,ce:9,certain:1,cfgnode:[1,5,7],chang:10,charact:2,charg:2,checkpoint:10,chemicalth:2,chen:0,children:2,choic:[1,5,9,10,15],choos:[10,11],citat:2,cite:0,cities_of_resid:2,city_of_birth:2,city_of_branch:2,city_of_death:2,city_of_headquart:2,cityserv:2,cl:1,classfiic:10,classif:[0,1,5,6,9,10,14],classification_manual_prompt:10,classificationrunn:7,classmethod:[1,5],classs:11,clean:10,cli:10,clone:13,code:[6,9,10],collect:2,com:13,combin:[1,9,11],combine_pattern:9,comma:[1,5,9,15],commerc:15,common:[1,5,6,9,10],compani:2,compat:11,complex:14,complic:11,compon:2,comput:9,condgen:2,condit:0,conditional_generation_dataset:2,conduct:[0,1,7,8,11,13],config:[1,5,7,11],config_default:10,config_yaml:10,configur:[0,1,2,5,6,7],configure_loss_funct:7,conflict:1,connect:9,consecut:15,constitut:2,constraint:9,construct:7,contain:[1,2,5,6,8,9,10,14],content:2,context:14,continu:[1,5],control:10,contuou:6,convent:2,convert:6,copi:14,correspond:[1,2,9,10,14],could:[1,2,7,8,10,14],countries_of_resid:2,country_of_birth:2,country_of_branch:2,country_of_death:2,country_of_headquart:2,creat:[10,13],cross:[2,9],cross_entropi:10,csv:[1,5,9,15],cuda_visible_devic:10,currenc:2,current:[1,5,6,9,10,11,13],custom:7,d:[1,5],data:[0,1,5,7,9,10,11,14],data_dir:2,data_load:11,data_util:[1,2,5,6,9,11],dataload:[7,8],dataparallel:6,dataprocessor:2,dataset:[1,2,3,9,11,15],dataset_nam:2,dataset_path:2,datasetobject:1,date_of_birth:2,date_of_death:2,dbpedia:2,decid:1,decod:[1,6],decoder_max_length:[1,10],decoding_strategi:10,defin:[1,6,9,14],denot:[1,5,14],deparallel:1,deploi:0,deriv:[1,5,10],descend:9,describ:2,descript:14,design:[1,5,6],desir:14,destin:2,detach:[1,5],detail:[1,5,9,10,11],determin:[9,10,11],dev:[2,3,10,11],dev_dataset:2,develop:[2,11,14],developen:10,devic:[1,10],device_map:1,dict:[1,5,6,7,9,14,15],differ:[9,10,11,14,15],dim:11,dimens:[1,5],ding2021openprompt:0,ding:[0,2],diplomat:15,directli:[0,1,9,14],director:2,directori:10,disappoint:2,disast:2,diseas:2,dissolv:2,distribut:[1,5,9],docker:13,document:1,doe:14,doesn:9,don:[1,5,9],done:11,down:[1,5,6,14],downstream:0,drop:1,dropout:[1,6],dummy_pt_object:1,duplic:14,dure:10,e1:2,e2:2,e:[1,5,6,8,9,10,14,15],each:[1,3,5,6,8,9,10,15],easi:14,easili:[1,11,14],educ:2,educationaldegre:2,effect:[1,2],einstein:11,either:1,elect:2,element:2,els:[1,5],embed:[1,5,6,14],employe:2,employee_of:2,empti:[1,5,9,15],encapsul:1,encod:[1,6],encourg:11,endless:[1,5],engin:15,enough:[3,9,14],ensembl:7,ensembletrain:9,entail:14,enter:15,entir:[1,5,9],entiti:[0,14],entranc:10,entropi:9,environ:13,eo:1,epoch:[9,10],equat:9,especi:15,essenc:11,establish:[1,5],et:2,etc:[1,5,6,10],eval:11,evalu:[1,2,10],event:2,everi:[1,5],everywher:[1,5],exampl:[0,1,2,5,6,8,9,10,14,15],except:1,expand:9,expect:[1,5],experi:10,explicit:15,explictli:[1,5,6],explor:11,express:14,extens:0,extern:9,extra:[1,5],extract:[1,2],extract_at_mask:1,f1:10,fail:6,fals:[1,3,5,10,14],faq:0,fear:2,featur:[0,1,5],feder:2,few:[2,3,9,10],few_shot:10,few_shot_sampl:10,fewnerd:2,fewshot:0,fewshotsampl:3,file:[1,2,5,7,9,10],file_path:[10,15],file_util:[1,5],fill:[1,2,5,6],film:[2,11],filter:9,find:0,fine:2,firm:2,first:[1,5,9,10,11,14],firstli:1,fit:[1,5],fix:[1,5,9],flexibl:[0,1,11,14],floor:2,follow:[9,10,11],food:2,forc:10,form:2,format:[1,5,6,9,15],forward:[1,6],found:2,founded_bi:2,four:9,framework:[0,1,9,10,14],freeli:7,freez:[1,10],freeze_para:10,freeze_plm:1,frequent:12,from:[0,1,2,5,6,9,10,11,14],from_config:[1,5],from_fil:[1,5,9,15],from_pretrain:11,fromth:14,full:10,further:9,futur:[0,13],g:[1,5,6,10,14,15],game:2,gather:[1,5],gather_output:[1,5],gear:2,gen_config:1,gen_max_length:10,gener:[0,1,5,6,9,10,11],generate_paramet:[1,5,6,9],generated_sent:1,generation_kwarg:1,generation_util:1,generationmixin:1,generationrunn:7,get:[1,2,5,6,9,11,13],get_default_loss_id:[1,5],get_default_shortenable_id:[1,5],get_default_soft_token_id:[1,5,6],get_dev_exampl:2,get_exampl:2,get_label:2,get_label_id:2,get_model_class:11,get_num_label:2,get_test_exampl:2,get_train_exampl:2,get_unlabeled_exampl:2,git:13,give:9,given:[1,2,5,6,9,11],global:[1,5],go:1,god:2,good:[1,5,11,15],govern:[2,15],governmentag:2,gpe:2,gpt2:11,gpt:[1,6,11],gpu:[6,10],grad:9,gradient:9,grain:2,grammer:14,graph:[1,5],great:11,greater:9,greatest:[2,11],greedi:10,group:[1,5,6,15],guid:11,gymnast:15,ha:[1,2,5,6,9,15],hai:0,handl:[1,5,9],handle_multi_token:[1,5],hasn:9,have:[1,2,5,6,9,11,14],head:[1,2,6,10],hendrickx:2,here:[2,10,11,14],hi:11,highwai:[2,15],hold:[1,5],holder:[1,5,6],hook:[1,5,6,9],hospit:2,hot:[1,5],hotel:[2,15],how:[0,1,5,9,11],howev:[6,9,10],http:[9,13],hu:0,huggingfac:[0,1,6,11,13],huh:14,hypothesi:14,i:[1,2,3,5,8,9,15],id2label:7,id:[1,2,5,9],ident:[2,14],identifi:[1,5,9],ignor:1,ii:[2,3],iii:2,imag:13,imdb:2,implement:[0,1,5,6,7,9,10,13],improv:[2,9],includ:[1,10,11],incorpor:9,incorporate_text_exampl:5,index:[0,1,2,15],indic:[1,3,5,6,10,14],infer:10,inform:14,inherit:[1,2,9],init:9,init_using_split:[9,10],initi:[1,5,14],inject:6,inner:1,input:[0,1,5,6,11,14],input_id:[1,6],input_length:1,inputexampl:[1,2,5,6,11],inputfeatur:[1,5,6,9],inputs_emb:6,insid:[1,5,6],insight:14,instal:0,instanti:[1,5],instead:1,instrument:2,integ:[1,5],integr:[1,7],intellect:11,interact:11,interfac:1,introduc:[1,10,14],introduct:0,island:2,iter:9,its:2,join:2,jointli:9,journal:0,json:[1,5,9,15],jsonal:[1,5,9],jsonl:[1,5,9,15],just:10,keep:[1,5,7,9],kei:[10,14,15],keyword:1,kindli:0,king:2,know:[1,5,6,9],knowledeagbl:9,knowledg:0,knowledgeableverb:9,kwarg:[1,5,9],label:[1,2,3,5,9,11],label_buff:9,label_logit:9,label_s:9,label_word:[1,5,9,10,11,15],label_word_num_per_class:[9,10],label_words_id:9,label_words_logit:[1,5,9],label_words_prob:9,labels_buff:9,labels_path:2,labl:1,lambda:14,land:2,languag:[0,1,2,5,6,10,11,13,14],lanuag:[1,5],larg:[2,15],largest:2,last:[2,10],later:9,latest:[0,13],law:[2,15],layer:[1,5,6],layernorm:10,lead:9,leanr:[10,14],learn:[0,1,3,6,9,11,14],learning_set:10,left:1,len:2,length:[1,5,6],less:9,let:[13,14],letsi:2,level:[9,10,14],librari:[0,2,13,15],like:[1,5,9,10,11,15],likelihood:9,line:[1,5,9,15],link:1,list:[1,2,3,5,6,8,9,15],liu:0,livingth:2,llr:[9,10],lm:11,load:[0,1,2,5,9,13],load_state_dict:1,loader:1,local:[1,5,9],local_rank:10,locat:[2,15],log:[9,10],logic:9,logit:[1,5,8,9,11],logot:9,look:11,loss:[1,5,7,10],loss_funct:[7,10],loss_id:[1,5,6],lotclass:2,low:9,lower:2,lr:10,lrb:2,lstm:6,made:11,mai:[1,5,6,9,10,11],maintain:12,make:[1,14],manual:[0,1,2,5,15],manual_templ:10,manual_verb:10,manualtempl:[1,6,11],manualverb:[1,9,11,15],maosong:0,map:[1,9],mapping_hook:6,market:[2,15],mask:[1,5,6,9,10,11,14],mask_num:8,mask_token:[1,5,6,10],match:[1,5,9],mathbf:9,max:[1,5],max_seq_length:[1,5,10],max_token_split:9,maximnum:9,maximum:1,mayb:1,mean:[1,5,9,10],meaning:[1,5],media:2,medic:2,member:2,member_of:2,messag:2,meta:[1,2,5,14],method:[1,2,5,10],metric:10,micro:10,mid_dim:6,middl:9,might:[1,5],militaryconflict:2,miniconda:13,miss:9,mlm:11,mlp:[6,14],mode:1,model:[0,1,2,5,6,7,8,9,10,11,13,14],model_class:11,model_kwarg:1,model_nam:10,model_path:[10,11],modeling_util:6,modeloutput:[1,5],modifi:[0,6,11],modul:[0,1,5,6,9,11,14],modular:11,mogul:2,monarch:2,more:[1,9,11],moreov:[1,5],most:[1,2,5,6,9,11,14],mountain:2,movi:2,much:9,multi:[1,2,5,9],multi_token_handl:[9,10],multipl:[1,5,9,11,15],music:2,must:[1,5],n:2,naiv:11,name:[1,2,5,9,10,15],neccessari:11,necessari:10,need:[1,5,6,7,9,14,15],neg:[2,11],ner:2,nerd:2,nessessori:9,nest:15,neutral:2,newal:2,newspap:2,next:[1,10],ning:[0,2],nlp:[0,11],nn:[1,5,6],no_decai:10,no_grad:11,no_rel:2,node:[1,5],nomin:2,none:[1,2,3,5,6,7,9,14],normal:[1,5,6,9],note:[1,5,11,14],notimplementederror:[1,5],now:[10,11,13],num_cadid:10,num_candid:9,num_class:[1,5,9,10],num_epoch:10,num_examples_per_label:[3,10],num_examples_per_label_dev:[3,10],num_examples_tot:3,num_examples_total_dev:3,num_gpu:10,num_label_words_per_class:9,num_mask:9,num_mask_token:1,num_search:[9,10],num_token:[6,10],num_warmup_step:10,number:[2,3,9,10,15],number_of_employe:2,obj:1,object:[1,5,6,7,9],octob:2,off:1,omit:14,on_label_words_set:[1,5,9],on_text_set:[1,5,6],one2one_verb:10,one2oneverb:9,one:[1,2,5,6,8,9,11,14,15],onli:[1,2,5,8,9,11,14],open:0,openprompt:[1,2,6,7,8,9,10,11,12,13,14],optim:[6,9,10,14],optimize_to_initi:9,optimz:14,option:[1,2,3,5,6,7,9],optionla:7,order:14,ordinari:9,org:[2,9],organ:2,orgin:[1,5,6,9,14],origin:[1,2,5,6,9,11,14],origini:[1,5],os:2,other:[0,1,2,5,6,7,10,11,13,14],other_famili:2,ouput:[1,5],our:[0,7,11,13,14],out:[9,14],output:[1,5,6],output_sequ:1,over:[1,3,5,9],overview:0,own:10,p:[6,9],packag:13,page:[1,12],paint:2,pair:2,paper:[0,2,8,9],paradigm:0,parallel:[1,6],paramet:[1,2,3,5,6,7,8,9,10],parent:[1,2,10],parent_config:10,park:2,parliament:2,pars:6,parse_text:5,part:[1,5,10,14],particular:1,pass:[1,7,9],past:1,past_key_valu:[1,6],path:[1,2,5,9,10],pdf:9,pension:2,per:[2,3,9],perform:9,person:[2,15],phrase:6,pilot:2,pipelin:[0,11],pipeline_bas:[7,8],place:[1,5,6],placehold:[1,5],placeholder_map:[1,5,6,10],plai:[0,7],pleas:[0,6,9,11,13,14],plm:[0,1,5,6,9],plm_config:6,plm_eval_mod:1,plm_type:11,point:9,polit:[2,15],politicalparti:2,politician:2,pop:3,posit:[1,2,5,6,11,14],post:[1,5,9],post_log_softmax:9,post_process:[1,14],post_processing_output:[1,5],potenti:[10,11],pre:[0,1,5,6,9,10,11,13],pred:11,predefin:[1,5,9],predict:[1,5,6,9,11,14],predict_eos_token:[1,10],prefix:[0,9,10],prefix_dropout:[6,10],prefix_tuning_templ:10,prefixtempl:1,prefixtuningtempl:6,premis:14,prepar:[1,9],prepare_inputs_for_gener:1,prepare_model_input:1,preprint:0,pretrain:1,pretrain_model:1,pretrainedconfig:6,pretrainedmodel:[1,6],pretrainedtoken:[1,5,6,9],prevent:[1,5],previou:9,print:11,prior:9,prob:[1,5,9],probabl:[1,5,9],probil:9,probs_buff:9,procedur:[1,5,6],process:[1,5,6,7,9,10,11],process_batch:[1,5,6],process_logit:9,process_output:[1,5],processor:[0,11],produc:[1,2,5,9],product:2,project:[1,5,9,11],prompt:[0,3,6,9,11,14],prompt_bas:1,prompt_encoder_typ:6,prompt_model:8,promptdataload:[1,7,8,11],promptforclassif:[1,7,8,11],promptforgener:[1,7],promptmodel:1,prompttempl:11,promptverb:11,properti:[1,5,6],propos:2,protest:2,provid:[0,2,10,15],ptr:0,ptrtemplat:6,ptrverbal:9,ptune:0,ptuningtempl:6,punctuat:14,pure:9,py:[10,13],python:[10,13,14],pytorch:[0,1,5,11,13],q_:9,question:12,quick:11,railwai:[2,15],rais:[1,5],random:[3,9,10],randomli:14,rang:[1,5],rate:[6,9,10],rather:[1,5],ratio:9,raw:1,re:[1,2,5,9],reach:9,read:[1,5],receiv:[1,5],recognit:2,recommend:[1,5,9,13,15],recurs:[1,5],refer:11,referenc:[1,5,6],reference_id:1,regard:[1,5,9,10],region:2,regist:[1,5,9],register_buff:9,register_calibrate_logit:[1,5,9],registered_inputflag_nam:[1,5],relat:[0,1,10],relation_classif:10,relation_classification_dataset:2,relationclassif:2,releas:2,religion:2,religious_affili:2,rememb:11,remov:[1,5],replac:11,repositori:13,repres:[1,2,5,6],reproduct:10,resign:2,restaur:2,restrict:9,result:9,retacr:2,retail:15,retriev:[1,5],review:2,revisit:2,revist:2,rewrit:[1,5],rightarrow:[1,5],road:[2,15],roberta:[9,11],root:[10,13],rrb:2,rstrip:14,rule:[6,9],run:10,runner:0,s:[1,2,5,6,7,9,10,11,13,14,15],safe_on_label_words_set:5,safe_on_text_set:[1,5],sai:2,same:[1,5,6,9,11,14],sampl:[1,3,5,6],sample_per_label:3,sample_tot:3,sampler:0,sampling_from_train:10,satisfi:9,save:[1,5,10],scale:2,scenario:3,schedul:10,scholar:[2,15],schools_attend:2,scienc:15,scientist:15,score:9,score_fct:[9,10],scratch:1,scrath:1,search:9,search_id:9,second:14,section:9,see:[1,2,7,8],seed:10,seen:[1,5,9],select:[1,3,5,9,10],self:[1,5,6,7,9],semant:2,semev:2,sensit:9,sentenc:[1,5,6,11,14],sentiment:[1,2,5,11,14],separ:[9,14],seper:[1,2,5,9,15],seq2seq:11,seq_len:[1,5],sequenc:[1,2,5,6,9,11],serv:[1,2,5,9],set:[1,2,5,6,9,11,14,15],setup:[10,13],shape:[1,5,8,9],share:14,sharehold:2,shengd:0,shift:1,shift_input_id:1,shift_logit:1,shift_logits_and_label:1,ship:2,shortcom:2,shorten:[1,5,6,14],shortenable_id:[1,5],shot:[2,3,9,10],should:[1,2,5,6,9,14],showorgan:2,shuffl:[1,10],shuffle_data:10,sibl:2,significantli:9,similarli:2,simpl:[1,7,14],simpli:11,simplic:[7,11],sinc:[1,5,6,9],singl:[1,5,6,9,15],situat:[1,5],size:[3,10],skyfox:2,slightli:9,slot:2,small:9,snap:2,soft:[1,5,6],soft_id:14,soft_token:6,soft_token_id:[1,5],softmax:[1,5,9],softtempl:[1,5],softwar:2,soldier:2,some:[1,5,10,11,14],someth:[1,5,6,9],sometim:[1,5],soon:6,sourc:[0,1,2,3,5,6,7,8,9],space:9,special:[1,5,6,7],specif:[1,14],specifi:[10,14,15],split:2,sport:[2,15],sportsev:2,sportsfacil:2,sportsleagu:2,sportsman:15,sportsteam:2,spous:2,stage:2,standard:0,start:[11,13],state:14,state_dict:1,stateorprovince_of_birth:2,stateorprovince_of_branch:2,stateorprovince_of_death:2,stateorprovince_of_headquart:2,stateorprovinces_of_resid:2,step:[1,9,10],stoica:2,stop:9,store:9,str:[1,2,5,6,9],strategi:[1,3,5,6,9],stricken:2,strictli:9,string:[9,14],strip:14,strong:1,sub:[1,5],subsequ:[1,5,6],subset:10,subsidiari:2,substitut:[1,5],suggest:[1,5,10],sum:[1,5,9],sun:0,supervis:2,support:[0,1,5,6,9,11,13,14,15],system:[2,13],t5:[1,6,11],t:[1,2,5,9],tac:2,tacr:2,tacrev:2,tail:[1,2,10],take:[9,14],talk:2,tao:0,target:[1,14],task:[0,1,2,6,7,9],teach:10,teacher_forc:[1,10],tech:[2,15],technolog:15,tempalt:10,templat:[0,1,5,7,8,9,10],tensor:[1,5,8,9],tensorboard:10,terribl:15,test:[2,7,10,11,13],test_dataload:7,test_dataset:2,texa:2,text:[0,1,5,6,9,10,11,14],text_a:[1,2,5,6,10,11],text_b:[1,2,5,6,10],text_classification_dataset:2,textclassif:2,textual:[0,1,5,6,9],tgt_text:2,th:[1,5],thaban:2,than:[1,5,9],theater:2,thei:[1,2,14],them:[11,14],therefor:[1,5,9],thi:[1,2,3,5,6,7,9,10,11,12,14,15],think:11,thorough:2,though:7,three:[1,5,9,11],through:1,thu:9,thunlp:13,time:[1,11],titl:[0,2,14],todo:[1,2],togeth:[2,9],token:[1,5,6,9,11,13,14],tokenization_util:[1,5,6,9],tokenizer_wrapper_class:1,tokenizerwrapp:1,tom:2,too:[6,14],top:[1,5],top_memb:2,topic:[2,14],torch:[1,5,6,8,9,11],total:3,touch:6,trade:15,tradit:2,traffic:15,traiend:1,train:[0,1,2,5,6,7,9,10,13],train_dataload:7,train_dataset:2,trainabl:[1,5],trainer:0,trainvalid_dataset:2,transform:[0,1,5,6,9,13],transit:[2,15],trick:7,tricycl:2,trigger:[1,5],trucat:[1,5],truncat:[1,14],truncate_method:[1,10],tune:[6,9],turn:1,turner:2,tutori:[11,14],two:[11,14],txt:[1,2,5,9,15],type:[0,1,3,5,6,9,10,14],typic:1,typing_dataset:2,unbalanc:9,under:2,understand:6,unifi:10,union:[1,2,5,6,9],unlabel:2,unset:10,up:[3,10,14],upon:0,us:[0,1,2,3,5,6,7,9,10,11,14,15],user:[7,10,13],using_decoder_past_key_valu:6,using_encoder_past_key_valu:6,util:[0,1,2,5,6,9],val:7,valid:10,valid_dataload:7,valid_dataset:2,valu:[1,5,6,9,10,14],variant:2,variou:[11,15],vector:[1,5],verbal:[0,1,5,7,10],verbaliez:[1,5],verbalizer_lr:9,verbalz:9,veri:9,version:[11,13],via:7,virtual:8,visibl:10,vocab:[1,5,9],vocab_s:[1,5,9],vocabs:8,vocabulari:[1,5,6,8,9],wa:[1,2,5,6,11,14],wai:2,want:[1,5,10,11,14,15],war:2,warm:10,warn:3,warp:1,we:[0,1,2,5,6,7,9,10,11,13,14,15],weapon:2,webnlg_2017:2,websit:2,weight:[1,5,9,10],weight_decai:10,weilin:0,were:[1,5,9],what:[1,5,6,11],when:[1,5,6,9,15],where:[11,14],whether:[1,3,5,6,9],which:[0,1,5,6,9,10,11,14,15],whole:[1,2,3,5,9],wide:2,wikipedia:2,without:[6,7],wonder:[1,5,11],word:[1,5,8,9,11],work:6,worker:2,world:[2,15],would:11,wrap:[1,5,6,9],wrap_one_exampl:[1,5,6],wrape:1,wrapper:[1,5],wrapperd:1,write:[0,1,5,9,10,11],writen:15,written:14,writtenart:2,wrote:10,x:9,y:9,yac:[1,5,7],yaml:10,year:[0,2],yield:9,yml:7,you:[0,1,5,7,9,10,11,13,14,15],your:[1,5,10,11,13,14,15],yulin:0,zero:10,zero_shot:10,zhang:2,zhao:0,zheng:0,zhiyuan:0},titles:["OpenPrompt Documentation","Base Classes","Data Processors","Data Utils","torch_geometric.nn","openprompt","Templates","Trainer","Utils Functions","Verbalizer","Play with Configuration","Introduction with an Example","FAQ","Installation","How to Write a Template?","How to Write a Verbalizer?"],titleterms:{"1":11,"2":11,"3":11,"4":11,"5":11,"6":11,"7":11,"class":1,"default":10,"function":8,One:9,agnewsprocessor:2,an:11,automat:9,base:1,basic:2,calibr:8,classif:[2,7],condit:2,config:10,configur:10,construct:11,content:[5,8],data:[2,3],dataload:[10,11],dbpediaprocessor:2,defin:11,document:0,entiti:2,environ:10,exampl:[3,11],faq:12,featur:3,fewnerdprocessor:2,fewshot:3,file:15,from:[13,15],gener:[2,7],get:0,github:13,how:[14,15],imdbprocessor:2,indic:0,infer:11,input:[3,15],instal:13,introduct:11,knowledg:9,label:15,learn:10,load:15,manual:[6,9],mix:14,nn:4,obtain:11,openprompt:[0,5],overview:[1,6,9],packag:0,pipelin:[1,10],plai:10,plm:[10,11],post:14,prefix:6,process:14,processor:2,prompt:[1,10],prompt_bas:5,promptmodel:11,ptr:[6,9],ptune:6,refer:0,relat:2,reproduc:10,retacredprocessor:2,runner:7,sampler:3,semevalprocessor:2,set:10,soft:14,specif:10,start:0,step:11,tabl:0,tacredprocessor:2,tacrevprocessor:2,task:[10,11],templat:[6,11,14],text:2,textual:14,torch_geometr:4,train:11,trainer:7,type:2,util:[3,8],verbal:[9,11,15],webnlgprocessor:2,word:15,write:[14,15]}})