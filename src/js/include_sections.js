$(document).ready(function(){
  $.get('html/about.html',function(data){ $('#p_about').html(data);});
  $.get('html/education.html',function(data){ $('#s_education').html(data);});
  $.get('html/research.html',function(data){ $('#s_research').html(data);});
  $.get('html/work_experience.html',function(data){ $('#s_work').html(data);});
  $.get('html/teaching.html',function(data){ $('#s_teaching').html(data);});
  $.get('html/grants_awards_skills.html',function(data){ $('#s_grants_awards_skills').html(data);});
});