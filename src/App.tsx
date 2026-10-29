import React, { useState } from 'react';
import { 
  Sparkles, 
  LayoutDashboard, 
  CheckCircle2, 
  Bot, 
  Gamepad2, 
  Plus, 
  Trash2, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Layers, 
  Wand2,
  Copy,
  Check
} from 'lucide-react';

interface QuickTask {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<QuickTask[]>([
    { id: '1', text: 'Определить идею и основные функции приложения', completed: true },
    { id: '2', text: 'Написать запрос в чат (что именно должно делать приложение)', completed: false },
    { id: '3', text: 'Протестировать живую версию и добавить новые фичи', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const sampleIdeas = [
    {
      category: 'Менеджмент & Продуктивность',
      title: 'Канбан-доска с аналитикой задач',
      prompt: 'Создай интерактивную канбан-доску с колонками, приоритетами, дедлайнами и дашбордом продуктивности',
      icon: LayoutDashboard,
      color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30'
    },
    {
      category: 'Финансы & Аналитика',
      title: 'Трекер бюджета и инвестиций',
      prompt: 'Сделай персональный трекер расходов и доходов с категориями, графиками и целями накоплений',
      icon: Layers,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      category: 'AI & Креатив',
      title: 'Умный генератор контента и постов',
      prompt: 'Создай генератор контента для соцсетей с выбором тональности, шаблонами и историей черновиков',
      icon: Wand2,
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30'
    },
    {
      category: 'Игры & Интерактив',
      title: 'Мини-игра / Квиз в реальном времени',
      prompt: 'Создай увлекательную викторину или аркадную мини-игру со счётом, таймером и таблицей рекордов',
      icon: Gamepad2,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
    }
  ];

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks(prev => [...prev, { id: Date.now().toString(), text: newTaskText.trim(), completed: false }]);
    setNewTaskText('');
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-indigo-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Creative Studio
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Ready to build
                </span>
              </h1>
              <p className="text-sm text-neutral-400">Интерактивная среда быстрой разработки</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>React 19 + Tailwind CSS</span>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-8 sm:p-10 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-800/80 text-neutral-300 border border-neutral-700/60">
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              Готов к работе
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Привет! Какое приложение <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">создадим сегодня?</span>
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              Опишите любую идею — от полноценной CRM-системы, финансового калькулятора или интерактивной игры до дашборда аналитики или планировщика задач. Я сразу реализую всё в коде!
            </p>
          </div>
        </div>

        {/* Two Column Layout: Ideas + Quick Starter Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ideas & Suggestions (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                Примеры идей для старта
              </h3>
              <span className="text-xs text-neutral-500">Нажмите, чтобы скопировать запрос</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sampleIdeas.map((idea, idx) => {
                const IconComponent = idea.icon;
                const isCopied = copiedIndex === idx;

                return (
                  <div 
                    key={idx}
                    className="group relative flex flex-col justify-between p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg border bg-gradient-to-br ${idea.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                          {idea.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {idea.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                        {idea.prompt}
                      </p>
                    </div>

                    <button
                      onClick={() => copyToClipboard(idea.prompt, idx)}
                      className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/50 hover:border-neutral-600 transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Скопировано! Отправьте в чат</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-neutral-400" />
                          <span>Скопировать запрос</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Interactive Mini-Widget (1 column) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Быстрый чеклист проекта
            </h3>

            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                {tasks.map(task => (
                  <div 
                    key={task.id}
                    className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/70 hover:border-neutral-700 transition-colors"
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="flex items-center gap-2 text-left flex-1"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        task.completed ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-neutral-600'
                      }`}>
                        {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`text-xs ${task.completed ? 'line-through text-neutral-500' : 'text-neutral-200'}`}>
                        {task.text}
                      </span>
                    </button>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="text-neutral-500 hover:text-red-400 p-1"
                      aria-label="Удалить"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={addTask} className="flex gap-2 pt-2 border-t border-neutral-800">
                <input
                  type="text"
                  placeholder="Добавить пункт..."
                  value={newTaskText}
                  onChange={e => setNewTaskText(e.target.value)}
                  className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  aria-label="Добавить"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <footer className="text-center pt-8 border-t border-neutral-900 text-neutral-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Напишите в чат ваши пожелания, и мы сразу превратим их в рабочий продукт.</p>
          <div className="flex items-center gap-1 text-indigo-400 font-medium">
            <span>Жду ваших указаний</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </footer>
      </div>
    </div>
  );
}
