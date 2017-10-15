; (function () {
    'use strist'

    var task, list_id;
    init_data();
    


    //初始化
    function init_data (){
        task= s.get('task',task)
        list_id= s.get('list_id',list_id)
     
        if(!task) {
            task = [],
            ('task',task)
        };
        if(!list_id){
            list_id= 0;
           ('list_id',list_id)
        }
    }

    function add (title,complistd) {
        complistd=complistd||false
        
        var new_task ={
           'id':s.get('list_id',list_id)+1,
           '名字' :title,
            complistd:complistd
        }
        task.push(new_task)
        inc()
        Sync()
    }

    function inc () {
    list_id= s.get('list_id',list_id),
    s.set('list_id',list_id+1);


    }

function Sync() {
    s.set('task',task)
}


    
add('nidaye')
















})()
























