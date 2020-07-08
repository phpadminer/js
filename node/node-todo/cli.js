#!/usr/bin/env node
const { program } = require('commander');
const inquirer = require('inquirer');
const { defaultPath,version } = require('./config');
const api = require('./index.js');

const options = [
    {
        name: '删除',
        value: 0,
        fun: (taskIndex, list) => {
            removeTask(taskIndex, list);
        }
    },
    {
        name: '更新',
        value: 1,
        fun: (taskIndex, list) => {
            inputTasks(list[taskIndex]['name']).then((input) => {
                changeTaskName(taskIndex, list, input['新的任务内容']);
            })
        }
    },
    {
        name: '完成',
        value: 2,
        fun: (taskIndex, list) => {
            doneTask(taskIndex, list);
        }
    },
    {
        name: '未完成',
        value: 3,
        fun: (taskIndex, list) => {
            undoTask(taskIndex, list);
        }
    },
    {
        name: '退出',
        value: 4,
        fun: () => {
            () => { }
        }
    }
];


program.version(version);

function inputTasks(defaultValue) {
    return inquirer.prompt({
        type: 'input',
        message: '请输入新的任务内容',
        name: '新的任务内容',
        default: defaultValue,
        loop: false
    })
}

function showAllTasks(name, list) {
    return inquirer.prompt({
        name,
        type: 'list',
        choices: list,
        loop: false
    })
}

function showOptions(name, options) {
    return inquirer.prompt({
        name,
        type: 'list',
        choices: options,
        loop: false
    })

}

function doneTask(index, list) {
    list[index]['status'] = true;
    api.store(defaultPath, list).then(() => {
        console.log('更新成功')
    });
}

function undoTask(index, list) {
    list[index]['status'] = false;
    api.store(defaultPath, list).then(() => {
        console.log('更新成功')
    });
}

function changeTaskName(index, list, newData) {
    list[index]['name'] = newData;
    api.store(defaultPath, list).then(() => {
        console.log('修改成功')
    });
}

function addNewTask(list, newData) {
    list.push(
        {
        name: newData,
        status: false
    })
    api.store(defaultPath, list).then(() => {
        console.log('新增成功');
    });
}

function removeTask(index, list) {
    list.splice(index, 1);
    api.store(defaultPath, list).then(() => {
        console.log('删除成功');
    });
}


/**
 * 新增一个或者多个任务
 */
program
    .command('add <task> [otherTasks]')
    .description('add one or more tasks')
    .action(() => {
        api.add(defaultPath, program.args.slice(1)).then(() => {
            console.log('新增成功')
        })
    });

/**
 * 显示所有的任务
 */
program
    .command('list')
    .description('show all tasks')
    .action(() => {
        api.list(defaultPath).then((list) => {
            let choices = [];
            list.map((item, index) => {
                let status = item.status ? '[x]' : '[_]';
                choices.push({
                    name: `${status} ${item.name}`,
                    value: index
                })
            })
            choices = [{
                name: '退出',
                value: -1
            }, ...choices, { name: '新增任务', value: -2 }]
            let name = '请选择操作'
            showAllTasks(name, choices).then(taskAnswers => {
                let taskIndex = taskAnswers[name];
                if (taskIndex >= 0) {
                    showOptions(name, options).then(optionAnswers => {
                        let optionIndex = optionAnswers[name];
                        options[optionIndex].fun && options[optionIndex].fun(taskIndex, list);
                    })
                } else if (taskIndex === -2) {
                    inputTasks('').then((input) => {
                        addNewTask(list, input['新的任务内容']);
                    })
                }
            })
        });
    })

program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.store(defaultPath, []).then(() => {
            console.log('清除成功');
        });
    })
program.parse(process.argv);