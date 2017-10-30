
window.dom = {}
/**
 * 创建一个节点
 * tagName 节点名
 * children 子节点
 * attributes 属性组成的对象
 */
window.dom.create = function(tagName,children,attributes){
    var tag = document.createElement(tagName)
    if(typeof children === 'string'){
        tag.appendChild(document.createTextNode(children))
    }else if(children instanceof HTMLElement){
        tag.appendChild(children)
    }else if(children instanceof Array){
        for(var i = 0; i < children.length; i++){    
            if(typeof children[i] === 'string'){
                tag.appendChild(document.createTextNode(children[i]))
            }else if(children[i] instanceof HTMLElement){
                tag.appendChild(children[i])
            }
        }
    }
    if(typeof attributes === 'object'){
        for(var key in attributes){
            tag.setAttribute(key,attributes[key])
        }
    }
    return tag
}

