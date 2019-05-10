import React from 'react';
import $ from 'jquery';
import { message, notification } from 'antd';

notification.config({
  duration: 12
})

var createReactClass = React.createClass || require('create-react-class');
var Notifier = createReactClass({
  statics: {
    focus:function(title, context, url, icon){
      if (!('Notification' in window)) {
        console.log("Your browser does not support desktop notifications, please try Chrome or Firefox.");
        return false;
      }

      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      } else {
        icon=(icon&&icon.match(/^.*\.(jpeg|jpg|gif|png)/gi))?icon:"http://ob9oayzh3.bkt.clouddn.com/images.png"
        var notification = new Notification(title, {
          icon: icon,
          body: context,
        });
        notification.onclick = function() {
          this.close();
        };
      }
    }
  },

  shouldComponentUpdate: function() {
    return false;
  },

  getScript: function() {
    var script = 'document.addEventListener("DOMContentLoaded", function () { if (Notification.permission !== "granted") Notification.requestPermission(); });';
    return script;
  },

  render: function() {
    return React.createElement("script", {
      type: "text/javascript",
      dangerouslySetInnerHTML: {
        __html: this.getScript()
      }
    });
  }
});

function copyStringToClipboard(str) {
     let el = document.createElement('textarea');
     el.value = str;
     el.setAttribute('readonly', '');
     el.style = {position: 'absolute', left: '-9999px'};
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     document.body.removeChild(el);
     message.info('Copied to Clipboard');
}

function copyArrayToClipboard(arr) {
  const element = $("<p>" + arr.map(c=> "<span>"+c+"</span>").join("<br/>") + "</p>")
  var $temp = $("<textarea>");
  var brRegex = /<br\s*[/]?>/gi;
  $("body").append($temp);
  $temp.val($(element).html().replace(brRegex, "\r\n").replace(/<span>/gi, "").replace(/<\/span>/gi, "")).select();
  document.execCommand("copy");
  $temp.remove();
  message.info('Copied to Clipboard');
}

function stopEvent(e) {
     if (e && e.preventDefault) {
          e.preventDefault()
     }
     if (e && e.stopPropagation) {
          e.stopPropagation()
     }
}

function assembleRpcUrl (service, serviceName, method) {
     const ser = Array.isArray(service) ? service[0] : service
     return ser.redirect + ser.ip + "/" + serviceName + "/" + method
}

function assembleEndpointUrl (service, serviceName, path) {
     const ser = Array.isArray(service) ? service[0] : service
     return ser.redirect + ser.ip + "/" + serviceName + "/admin/" + path
}

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

function notify(msg) {
     Notifier.focus(msg, "", null, "img/A.png")
}

function slice(object, isAll) {
  let result = []
  if (object) {
       for(let property in object) {
          if (!isAll && object[property] > 0) {
               result.push({key: property, value: object[property]})
          }
          if (isAll) {
               result.push({key: property, value: object[property]})
          }
       }
  }
  return result
}

function uniq(arr) {
    let res = [];
    let json = {};
    for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
};

export {
     copyStringToClipboard as copy,
     copyArrayToClipboard as copyArray,
     stopEvent,
     assembleRpcUrl,
     assembleEndpointUrl,
     isEmpty,
     notify,
     slice,
     uniq,
};