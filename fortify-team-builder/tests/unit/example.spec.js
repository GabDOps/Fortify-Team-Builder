import { shallowMount } from '@vue/test-utils';
import TeamCard from '@/components/team/TeamCard.vue';

describe('TeamCard.vue', () => {
  it('renders team name correctly', () => {
    const teamName = 'Development Team';
    const wrapper = shallowMount(TeamCard, {
      propsData: { name: teamName }
    });
    expect(wrapper.text()).toContain(teamName);
  });

  it('emits an event when the edit button is clicked', () => {
    const wrapper = shallowMount(TeamCard);
    wrapper.find('button.edit').trigger('click');
    expect(wrapper.emitted().edit).toBeTruthy();
  });

  it('displays the correct number of members', () => {
    const members = ['Alice', 'Bob', 'Charlie'];
    const wrapper = shallowMount(TeamCard, {
      propsData: { members }
    });
    expect(wrapper.findAll('.member').length).toBe(members.length);
  });
});