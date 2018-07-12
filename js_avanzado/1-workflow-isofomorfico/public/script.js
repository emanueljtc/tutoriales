(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(name) {
    _classCallCheck(this, Task);

    this.id = new Date().getTime();
    this.name = name;
    this.isComplete = false;
    return this;
};

exports.default = Task;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = require('./helpers');

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoList = function () {
    function ToDoList(key) {
        _classCallCheck(this, ToDoList);

        this.key = key;

        if (!_helpers.ls.getItem(key)) _helpers.ls.setItem(key, _helpers.j.stringify([]));

        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    _createClass(ToDoList, [{
        key: 'addTask',
        value: function addTask(e) {
            //alert('funciona')
            if (!e.target.value) alert('No puedes agregar tareas vacias');

            if (e.keyCode === _helpers.ENTER_KEY) {
                var newTask = new _Task2.default(e.target.value),
                    tasks = _helpers.j.parse(_helpers.ls.getItem(this.key));

                tasks.push(newTask);
                _helpers.ls.setItem(this.key, _helpers.j.stringify(tasks));
                this.renderTask(newTask);
                e.target.value = null;
                //c(this.key, task, newTask, ls)
            }
        }
    }, {
        key: 'editTask',
        value: function editTask(e) {
            var _this = this;

            //c(e.target.localName)
            if (e.target.localName === 'label') {
                var tasks = _helpers.j.parse(_helpers.ls.getItem(this.key)),
                    toEdit = tasks.findIndex(function (task) {
                    return task.name === e.target.textContent;
                }),
                    label = _helpers.d.querySelector('[data-id="' + tasks[toEdit].id + '"]');
                (0, _helpers.c)(tasks, toEdit, label);

                var saveTask = function saveTask(e) {
                    e.target.textContent = e.target.textContent;
                    tasks[toEdit].name = e.target.textContent;
                    _helpers.ls.setItem(_this.key, _helpers.j.stringify(tasks));
                    e.target.blur();
                };

                label.addEventListener('blur', function (e) {
                    return saveTask(e);
                });
                label.addEventListener('keyup', function (e) {
                    return e.keyCode === _helpers.ENTER_KEY && saveTask(e);
                });
            }
        }
    }, {
        key: 'removeTask',
        value: function removeTask(e) {
            if (e.target.localName === 'a') {
                var tasks = _helpers.j.parse(_helpers.ls.getItem(this.key)),
                    toRemove = tasks.findIndex(function (task) {
                    return task.id.toString() === e.target.dataset.id;
                });

                tasks.splice(toRemove, 1);
                _helpers.ls.setItem(this.key, _helpers.j.stringify(tasks));
                e.target.parentElement.remove();
            }
        }
    }, {
        key: 'renderTask',
        value: function renderTask(task) {
            var templateTask = '\n            <li class="List-item ' + (task.isComplete ? 'complete' : '') + '">\n                <input type="checkbox" id="' + task.id + '" class="List-checkbox ' + (task.isComplete ? 'complete' : '') + '"> \n                <label data-id="' + task.id + '" class="List-label" contenteditable spellcheck>' + task.name + '</label>           \n                <a href="#" data-id="' + task.id + '" class="List-removeLink">&#128465;</a>\n            </li>\n         ';

            list.insertAdjacentHTML('beforeend', templateTask);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var tasks = _helpers.j.parse(_helpers.ls.getItem(this.key)),
                listTasks = list.children;
            tasks.forEach(function (task) {
                return _this2.renderTask(task);
            });
            Array.from(listTasks).forEach(function (li) {
                li.querySelector('input[type="checkbox"]').addEventListener('change', function (e) {
                    var task = tasks.filter(function (task) {
                        return task.id.toString() === e.target.id;
                    });
                    (0, _helpers.c)(task);

                    if (e.target.checked) {
                        e.target.parentElement.classList.add('complete');
                        task[0].isComplete = true;
                    } else {
                        e.target.parentElement.classList.remove('complete');
                        task[0].isComplete = false;
                    }
                    _helpers.ls.setItem(_this2.key, _helpers.j.stringify(tasks));
                });
            });
            task.addEventListener('keyup', this.addTask);
            list.addEventListener('click', this.editTask);
            list.addEventListener('click', this.removeTask);
        }
    }]);

    return ToDoList;
}();

exports.default = ToDoList;

},{"./Task":1,"./helpers":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ENTER_KEY = 13,
    c = console.log,
    d = document,
    j = JSON,
    ls = localStorage;

exports.ENTER_KEY = ENTER_KEY;
exports.c = c;
exports.d = d;
exports.j = j;
exports.ls = ls;

},{}],4:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _ToDoList = require('./ToDoList');

var _ToDoList2 = _interopRequireDefault(_ToDoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = _helpers.d.querySelector('#task'),
    list = _helpers.d.querySelector('#list'),
    todo = new _ToDoList2.default('edList');

todo.render();

},{"./ToDoList":2,"./helpers":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvVGFzay5qcyIsInNyYy9qcy9Ub0RvTGlzdC5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNBcUIsSSxHQUNqQixjQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLLEVBQUwsR0FBVSxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVY7QUFDQSxTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsQzs7a0JBTmdCLEk7Ozs7Ozs7Ozs7O0FDQXJCOztBQUNBOzs7Ozs7OztJQUVxQixRO0FBQ2pCLHNCQUFZLEdBQVosRUFBaUI7QUFBQTs7QUFDYixhQUFLLEdBQUwsR0FBVyxHQUFYOztBQUVBLFlBQUksQ0FBQyxZQUFHLE9BQUgsQ0FBVyxHQUFYLENBQUwsRUFDSSxZQUFHLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLFdBQUUsU0FBRixDQUFZLEVBQVosQ0FBaEI7O0FBRUosYUFBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxhQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0g7Ozs7Z0NBQ08sQyxFQUFHO0FBQ1A7QUFDQSxnQkFBSSxDQUFDLEVBQUUsTUFBRixDQUFTLEtBQWQsRUFDSSxNQUFNLGlDQUFOOztBQUVKLGdCQUFJLEVBQUUsT0FBRixLQUFjLGtCQUFsQixFQUE2QjtBQUN6QixvQkFBSSxVQUFVLElBQUksY0FBSixDQUFTLEVBQUUsTUFBRixDQUFTLEtBQWxCLENBQWQ7QUFBQSxvQkFDSSxRQUFR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LEdBQUEsQztRQUNBLEUsR0FBQSxFOzs7OztBQ1hKOztBQUNBOzs7Ozs7QUFFQSxJQUFNLE9BQU8sV0FBRSxhQUFGLENBQWdCLE9BQWhCLENBQWI7QUFBQSxJQUNJLE9BQU8sV0FBRSxhQUFGLENBQWdCLE9BQWhCLENBRFg7QUFBQSxJQUVJLE9BQU8sSUFBSSxrQkFBSixDQUFhLFFBQWIsQ0FGWDs7QUFJQSxLQUFLLE1BQUwiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCB7IEVOVEVSX0tFWSwgYywgZCwgaiwgbHMgfSBmcm9tICcuL2hlbHBlcnMnXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXlcblxuICAgICAgICBpZiAoIWxzLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgICAgIGxzLnNldEl0ZW0oa2V5LCBqLnN0cmluZ2lmeShbXSkpXG5cbiAgICAgICAgdGhpcy5hZGRUYXNrID0gdGhpcy5hZGRUYXNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5lZGl0VGFzayA9IHRoaXMuZWRpdFRhc2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJlbW92ZVRhc2sgPSB0aGlzLnJlbW92ZVRhc2suYmluZCh0aGlzKVxuICAgIH1cbiAgICBhZGRUYXNrKGUpIHtcbiAgICAgICAgLy9hbGVydCgnZnVuY2lvbmEnKVxuICAgICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgYWxlcnQoJ05vIHB1ZWRlcyBhZ3JlZ2FyIHRhcmVhcyB2YWNpYXMnKVxuXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEVOVEVSX0tFWSkge1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhlLnRhcmdldC52YWx1ZSksXG4gICAgICAgICAgICAgICAgdGFza3MgPSBqLnBhcnNlKGxzLmdldEl0ZW0odGhpcy5rZXkpKVxuXG4gICAgICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgICAgICAgICBscy5zZXRJdGVtKHRoaXMua2V5LCBqLnN0cmluZ2lmeSh0YXNrcykpXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhc2sobmV3VGFzaylcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gbnVsbFxuICAgICAgICAgICAgICAgIC8vYyh0aGlzLmtleSwgdGFzaywgbmV3VGFzaywgbHMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWRpdFRhc2soZSkge1xuICAgICAgICAvL2MoZS50YXJnZXQubG9jYWxOYW1lKVxuICAgICAgICBpZiAoZS50YXJnZXQubG9jYWxOYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBqLnBhcnNlKGxzLmdldEl0ZW0odGhpcy5rZXkpKSxcbiAgICAgICAgICAgICAgICB0b0VkaXQgPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLm5hbWUgPT09IGUudGFyZ2V0LnRleHRDb250ZW50KSxcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Rhc2tzW3RvRWRpdF0uaWR9XCJdYClcbiAgICAgICAgICAgIGModGFza3MsIHRvRWRpdCwgbGFiZWwpXG5cbiAgICAgICAgICAgIGNvbnN0IHNhdmVUYXNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIHRhc2tzW3RvRWRpdF0ubmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgbHMuc2V0SXRlbSh0aGlzLmtleSwgai5zdHJpbmdpZnkodGFza3MpKVxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiBzYXZlVGFzayhlKSlcbiAgICAgICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiAoZS5rZXlDb2RlID09PSBFTlRFUl9LRVkpICYmIHNhdmVUYXNrKGUpKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlVGFzayhlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5sb2NhbE5hbWUgPT09ICdhJykge1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gai5wYXJzZShscy5nZXRJdGVtKHRoaXMua2V5KSksXG4gICAgICAgICAgICAgICAgdG9SZW1vdmUgPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkLnRvU3RyaW5nKCkgPT09IGUudGFyZ2V0LmRhdGFzZXQuaWQpXG5cbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSh0b1JlbW92ZSwgMSlcbiAgICAgICAgICAgIGxzLnNldEl0ZW0odGhpcy5rZXksIGouc3RyaW5naWZ5KHRhc2tzKSlcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJUYXNrKHRhc2spIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlVGFzayA9IGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIkxpc3QtaXRlbSAke3Rhc2suaXNDb21wbGV0ZSA/ICdjb21wbGV0ZScgOiAnJ31cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJMaXN0LWNoZWNrYm94ICR7dGFzay5pc0NvbXBsZXRlID8gJ2NvbXBsZXRlJyA6ICcnfVwiPiBcbiAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cIkxpc3QtbGFiZWxcIiBjb250ZW50ZWRpdGFibGUgc3BlbGxjaGVjaz4ke3Rhc2submFtZX08L2xhYmVsPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwiTGlzdC1yZW1vdmVMaW5rXCI+JiMxMjg0NjU7PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgIGBcblxuICAgICAgICBsaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGVUYXNrKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0YXNrcyA9IGoucGFyc2UobHMuZ2V0SXRlbSh0aGlzLmtleSkpLFxuICAgICAgICAgICAgbGlzdFRhc2tzID0gbGlzdC5jaGlsZHJlblxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGhpcy5yZW5kZXJUYXNrKHRhc2spKVxuICAgICAgICBBcnJheS5mcm9tKGxpc3RUYXNrcykuZm9yRWFjaChsaSA9PiB7XG4gICAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQudG9TdHJpbmcoKSA9PT0gZS50YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgYyh0YXNrKVxuXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgIHRhc2tbMF0uaXNDb21wbGV0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcbiAgICAgICAgICAgICAgICAgICAgdGFza1swXS5pc0NvbXBsZXRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbHMuc2V0SXRlbSh0aGlzLmtleSwgai5zdHJpbmdpZnkodGFza3MpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYWRkVGFzaylcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdFRhc2spXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZVRhc2spXG4gICAgfVxufSIsImNvbnN0IEVOVEVSX0tFWSA9IDEzLFxuICAgIGMgPSBjb25zb2xlLmxvZyxcbiAgICBkID0gZG9jdW1lbnQsXG4gICAgaiA9IEpTT04sXG4gICAgbHMgPSBsb2NhbFN0b3JhZ2VcblxuZXhwb3J0IHtcbiAgICBFTlRFUl9LRVksXG4gICAgYyxcbiAgICBkLFxuICAgIGosXG4gICAgbHNcbn0iLCJpbXBvcnQgeyBkIH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vVG9Eb0xpc3QnXG5cbmNvbnN0IHRhc2sgPSBkLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyksXG4gICAgbGlzdCA9IGQucXVlcnlTZWxlY3RvcignI2xpc3QnKSxcbiAgICB0b2RvID0gbmV3IFRvRG9MaXN0KCdlZExpc3QnKVxuXG50b2RvLnJlbmRlcigpIl19
